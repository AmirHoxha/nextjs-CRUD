import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {handleSubmission} from "@/app/actions";
import {SubmitButton} from "@/components/general/SubmitButton";

export default function CreateBlogRoute() {
    return (
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post to share with the world</CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input required type="text" name="title" placeholder="Title"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea required name="content" placeholder="Content"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input required type="url" name="url" placeholder="Image url" />
                        </div>

                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}