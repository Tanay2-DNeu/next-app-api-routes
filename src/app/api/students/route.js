import students from "@/data/students.json";

export async function GET() {
  return Response.json(students);
}
