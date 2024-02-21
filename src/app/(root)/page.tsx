import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton afterSignOutUrl="/" />

    </div>
  )
}

export default page