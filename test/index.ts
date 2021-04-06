import IgCraper from "../src";

// TODO: Write some good tests :p

const testUser = async () => {
    const igCraper = new IgCraper()
    const data = await igCraper.getUser("piyushsthr")

    const { graphql } = data

    let message = `
    Hi ${graphql.user.full_name},
    Your Bio:- ${graphql.user.biography}
    `
    console.log(message)
}
const testPost = async () => {
    const igCraper = new IgCraper()
    const data = await igCraper.getPost("https://www.instagram.com/p/CDL3Ut0ndO0")

    const filtered = igCraper.filterPost(data)
    console.log(JSON.stringify(filtered))
}

testPost()