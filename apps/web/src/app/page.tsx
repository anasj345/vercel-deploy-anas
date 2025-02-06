import { User } from "@/types/user";

export default async function HomePage() {
  const response = await fetch("http://localhost:8000/api/v1/users");
  const users = await response.json();

  console.log(users);

  return (
    <section>
      {users.data.map((user: User) => {
        return (
          <div key={users.id}>
            <p>Name: {users.name}</p>
            <p>Email: {users.email}</p>
          </div>
        );
      })}
    </section>
  );
}
