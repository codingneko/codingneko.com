# Cody's personal website

This is my personaal website. The idea is for it to serve as a sort of self-updating index of stuff I do. I'd like to be as hands off as possible with it in terms of adding content.

I decided to make this repo public in case anybody wants to use it as a template for other projects.

# Content
I expect to have the following stuff uploaded to this website. Keep in mind the site is very much still work in progress, so things may be unfinished. Check each section for current progress and things that still are in TODO state.

#### Things already here
- [Services](#services)
- [Gallery](#gallery)
- [Projects](#projects)

#### Things I'm planning to add
- [Social feed](#social-feed)
- [Administration](#administration)

---
## Services
This section contains cards with information about the services I host on my server. It doesn't currently self update at all, but it is defined with a JavaScript object arraay, so it's easy to update. However I do plan on populating this array from a database (type still TBD) in the future. Check the [Administration](#administration) section below for more information.

## Gallery
This section contains a gallery of images taken directly from a Misskey Drive folder. They're fetched from the Misskey API for ease of use, as this way I don't have to manually update it and I can just add images by dropping them in the gallery folder.

## Projects
This section contains cards with projects I'm working on. It fetches information from the GitHub API (essentially my pinned repositories) to self-populate with them. The idea is again to have a hands off approach so I don't have to constantly be updating what I'm working on.

I have plans to have a similar thing to what I mentioned on the [Services](#services) section, so I can add projects I don't have on GitHub too, but those would be "manually" updated from the front-end.

## Social Feed
This section is still TODO. The idea is to make it a combined timeline of all my social media profiles ([Twitter](https://twitter.com/codingneko) and [Misskey](https://misskey.codingneko.com/@cody)), showing my latest status updates from them.

## Administration
This part of the site is only visible to the deployer (me, or maybe you, if you clone it), The idea is to have an easy way to update non-API based sections like the [Services](#services) section. 

This is expected to require setting up the following:
- A database
- An API
- A login page
- Edit buttons for sections (maybe componentinzed)
- Edition sections for each editable section
- Other unforseen stuff

I fully expect to have to switch to a service based application rather than serving the page as static files like I do now, from NGINX.