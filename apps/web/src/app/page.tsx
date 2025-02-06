import { User } from "@/types/user";

export default async function HomePage() {
  const response = await fetch(
    "https://vercel-deploy-anas-web.vercel.app/api/v1/users"
  );
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
