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

### it work like above every key stroke will render the component and the timer will reset and so no api call will made.

### if there is no key stroke is pressed then after 200ms. api call will made.

# Build the cache so no need to make api call again for same query

### use object to store the data

- because of key value pair time complextity O(1)
- suppose we use array in the array it takes the O(n) to find query

# nested Comments

- we also learn how the N no of nested comments work and how to create


# Infinite scroll and pagination in live chat
  ## challanges
   - Get data live
   - Update the Ui such way it should no freeze

  ## TWO WAYS TO DO THAT

     - WebSocket (Two Way Connection) no interval send data directly in any direction

     - API/Long polling (ONE WAY)some interval later request goes to backend