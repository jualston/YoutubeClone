import{getFunctions, httpsCallable} from 'firebase/functions'

// get instance of getfunctions
const functions = getFunctions();

const generateUploadUrl = httpsCallable(functions, 'generateUploadUrl');

export async function uploadVideo(file:File){
    const response: any = await generateUploadUrl({
        fileExtension: file.name.split('.').pop()
    });
    // Upload the file using Signed URL
    await fetch(response?.data?.url, {
        method:"PUT",
        body: file,
        headers: {
            'Content-Type': file.type
        }
    },);
    return;
}