## TO DO

[] How can I use the /activities/:activityId link with the randomly generated activities. Should be able to use the same ActiviyPage component, but how to send the activity in state to the react-router-dom Link? 

[] New Name ideas
    - NEVER BORED
    - EXPLORE MORE
    - TRYDEA
    - EXPLOREDIA
    - INDEX EXPLORE IDEA ENCYCLOPEDIA

[] Turn the index into collapsible/expandable components using a custom accordian react hook

[] Incorporate icons for better looking interface?

[] ADD A TON OF ACTIVITIES
    [x] 20
    [x] 30 
    [] 40
    [] 50
    [] 60
    [] 70
    [] 80
    [] 90
    [] 100

## Complete

[x] Lazy load images (is that even the correct term?). Basically, have a placeholder for images until fully rendered. I created a custom react hook but my "placeholder" image is the same for every image.

[x] Re-design the grid of category buttons. They just don't fit the theme.

[x] Create an index/table of contents for ALL the activities, organized by category and probably alphabetized.

[x] Create light/dark theme switch.

[x] Light/Dark theme is working, just need to DEBUG TOGGLE not persisting on page reload.
   [x] I did this ---> I might have to rework the way I add/remove the CSS to the my toggle and have it persist even when page reloads
    (nope! - Or figure out how to add checked = true/false to the toggle-switch ID)

[x] Implement remember user preference for light/dark mode

[x] Image on full screen is not behaving correctly. Need to set a min or max width.

[x] Incorporate /activities/:activityId functionality for clicking on a specefic activity. Better web practices for navigating browser history and can navigate directly to an activity

[x] Create an ActivityError component that displays a more interesting error message when "Activity not found"

[x] (Not sure I am going to do this anymore) Lazy loader is there and working, BUT I want to somehow render a placeholder of the SAME image about to load. I don't know if that's possible. I can check this one off when I finally figure out how to lazy laod the SAME image and not a small, local image. 