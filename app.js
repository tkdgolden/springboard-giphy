$(function() {
    const apiKey = "15y4P0OosEskTP11VAEVbhNFLzwDm5UF"
    const url = "https://api.giphy.com/v1/gifs/search"
    const limit = 1
    const gifDiv = $("#gifs")
    let input = $("#input")

    $("#search").on("click", function(event) {
        event.preventDefault()
        let query = input.val()
        displayImage(sendRequest(query))
    })

    async function sendRequest(query) {
        let response = await axios.get(url, {params: {api_key: apiKey, q: query, limit: limit}})
        let image = response.data.data[0].images.fixed_height.url
        return image
    }

    async function displayImage(image) {
        gifDiv.prepend(`<img class="img-fluid m-1" src=${await image}>`)
        $(input).val("")
    }

    $("#remove").on("click", function() {
        gifDiv.html('<img src="Poweredby_100px_Badge.gif">')
    })
})