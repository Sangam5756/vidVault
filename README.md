## Design Youtube

- Head
- Body
- SideBar
    - MenuItems
    - MainContainer
        - ButtonList
        - VideContainer
        - VideoCard


# Design Search
 - Debouncing
    - it is a programming technique used to ensure that a function is not invoked too frequently.
        - debouncing is commonly applied to scenarios where users might trigger events repeatedly in quick succession,
             such as typing in a search input box or resizing a window.
             
    - performance
        - This approach prevents the function from being called on every keystroke,
             improvingerformance and preventing unnecessary API requests.


## working
   - key - i

    - render component
    - useEffect()
    - start => timer api call after 200ms

   - key - ip

    - destroy the component(useEffect return method)
    - re-render the component
    - useEffect()
    - start => timer api call after 200ms
  
   - setTimeout(200)


### it work like above  every key stroke will render the component and the timer will reset and so no api call will made.
### if there is no key stroke is pressed then after 200ms. api call will made.
    
