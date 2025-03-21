const Main = document.getElementById("main");
const Home = document.getElementById("home");
fetchAndSetInnerHtml("homePage.html");
const Profile = document.getElementById("profile");
const Projects = document.getElementById("projects");

//const button = document.getElementsByClassName("button");


async function fetchAndSetInnerHtml(path)
{
	try
	{
		await fetch(path)
				.then(response => response.text())
				.then(fetchedHtml => Main.innerHTML = fetchedHtml);
	}
	catch(err)
	{
		console.log(err);
	}
}

document.querySelectorAll(".button")
	.forEach(button => {button.addEventListener("click", () => 
		{
			button.classList.add("clicked");
			button.classList.add("MenuTab-noHoverAfterClick");
			button.classList.remove("MenuTab");
			setTimeout(() => 
				{
					button.classList.remove("clicked");
					button.classList.add("MenuTab");
					button.classList.remove("MenuTab-noHoverAfterClick");
				}, 300);
		});});


//Home.addEventListener("click", () => fetchAndSetInnerHtml("index.html"));
Home.addEventListener("click", () => fetchAndSetInnerHtml("homePage.html"));
Profile.addEventListener("click", () => fetchAndSetInnerHtml("profilePage.html"));
Projects.addEventListener("click", () => fetchAndSetInnerHtml("projectsPage.html"));

window.addEventListener("scroll", scrollPercent);
function scrollPercent()
{
	var scrollpercent = (Main.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	
}