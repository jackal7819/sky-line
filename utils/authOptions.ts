import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/config/database';
import { AuthOptions, Profile, Session } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			id?: string;
			name: string | null;
			email: string | null;
			image: string | null;
		};
	}
}

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
	callbacks: {
		// Invoked on successful sign in
		async signIn({ profile }: { profile?: Profile | undefined }) {
			// 0.Check if the profile exists
			if (!profile) {
				return false;
			}
			// 1. Connect to the database
			await connectDB();
			// 2. Check if the user already exists
			const userExists = await User.findOne({ email: profile?.email });
			// 3. Create a new user if it doesn't
			if (!userExists) {
				// Truncate username if too long
				const username = profile?.name!.slice(0, 20);

				await User.create({
					email: profile?.email,
					username,
					image: profile?.image,
				});
			}
			// 4. Return true to allow sign in
			return true;
		},
		// Session callback function that modifies the session object
		async session({ session }: { session: Session }) {
			// 1. Get the user from the database
			const user = await User.findOne({ email: session.user.email });
			// 2.Assign user id from the session
			if (user) {
				session.user.id = user._id.toString();
			}
			// 3. Return the session
			return session;
		},
	},
};
