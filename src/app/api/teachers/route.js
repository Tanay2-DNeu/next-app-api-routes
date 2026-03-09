import teachers from "@/data/teachers.json";

export async function GET() {
  return Response.json(teachers);
}

export async function POST(request) {
  const body = await request.json();

  const newTeacher = {
    id: teachers.length + 1,
    name: body.name,
    subject: body.subject,
  };

  teachers.push(newTeacher);

  return Response.json({
    message: "Teacher added",
    teacher: newTeacher,
  });
}
