import SigninComponent from "@/components/Signin"
//week-13-offline.kirattechnologies.workers.dev/api/v1/user/details
async function fetchData() {
  let data
  setTimeout(async () => {
    const res = await fetch(
      "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    )
    data = await res.json()
  }, 5000)
  return data
}
export default async function Signin() {
  const data = await fetchData()
  return (
    <div>
      <SigninComponent />
      {data.email}
    </div>
  )
}
