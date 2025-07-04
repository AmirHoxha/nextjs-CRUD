"use server";

import { prisma } from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

export async function handleSubmission(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/register");
    }

    const title = formData.get("title");
    const content = formData.get("content");
    const url = formData.get("url");

    await prisma.blogPost.create({
        data: {
            title: title as string,
            cotent: content as string,
            imageUrl: url as string,
            authorID: user!.id,
            authorImage: user!.picture as string,
            authorName: user!.given_name as string
        },
    });

    revalidatePath("/")

    return redirect("/dashboard");
}
