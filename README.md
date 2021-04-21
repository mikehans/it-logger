# About
This is the 3rd project from [Brad Traversy's React Front to Back](https://www.packtpub.com/product/react-front-to-back-updated-for-2021-video/9781838645274).

I've followed through sections 1 & 2 and will do section 3 without the video.

As the project uses the older connect() react-redux style, I'll update to use hooks instead.
## TODOs

[X] Add the techs section without the videos using connect() - add and delete techs

[X] Modify the select box of techs used in the Create Log form to fetch from the techs
 - presently an issue where a GET request to /techs is issued twice on load. The second returns a 304 but it's unnecessary
   - once in AddLogModal
   - once in TechListModal

[ ] Modify the application to use React Hooks instead of connect()
