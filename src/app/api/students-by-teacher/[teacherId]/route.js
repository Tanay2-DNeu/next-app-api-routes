import students from "@/data/students.json";

export async function GET(request, { params }) {
  const teacherId = parseInt(params.teacherId);

  const filteredStudents = students.filter(
    (student) => student.teacherId === teacherId,
  );

  return Response.json(filteredStudents);
}
