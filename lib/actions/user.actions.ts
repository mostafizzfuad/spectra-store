"use server";

import {
	// shippingAddressSchema,
	signInFormSchema,
	// signUpFormSchema,
	// paymentMethodSchema,
	// updateUserSchema,
} from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
// import { hash } from "../encrypt";
// import { prisma } from "@/db/prisma";
// import { formatError } from "../utils";
// import { ShippingAddress } from "@/types";
// import { z } from "zod";
// import { PAGE_SIZE } from "../constants";
// import { revalidatePath } from "next/cache";
// import { Prisma } from "@prisma/client";
// import { getMyCart } from "./cart.actions";

// Sign in the user with credentials
export async function signInWithCredentials(
	prevState: unknown,
	formData: FormData
) {
	try {
		const user = signInFormSchema.parse({
			email: formData.get("email"),
			password: formData.get("password"),
		});

		await signIn("credentials", user);

		return { success: true, message: "Signed in successfully" };
	} catch (error) {
		if (isRedirectError(error)) {
			throw error;
		}
		return { success: false, message: "Invalid email or password" };
	}
}

// Sign user out
export async function signOutUser() {
	await signOut();
}