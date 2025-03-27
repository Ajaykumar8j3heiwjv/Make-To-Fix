document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart with persisted data
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCountElement = document.querySelector(".cart-count");

  // Load audio files
  function playSound(src) {
    const sound = new Audio(src)
    sound.play()
  }

  // Function to update local storage
  function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  // Function to update button states
  function updateButtonState() {
    const addButtons = document.querySelectorAll(".add-btn")
    addButtons.forEach((button) => {
      const card = button.closest(".product-card")
      const name = card.querySelector("p").textContent
      const isInCart = cart.some((item) => item.name === name)
      if (isInCart) {
        button.textContent = "Remove"
        button.classList.add("in-cart")
      } else {
        button.textContent = "+ ADD"
        button.classList.remove("in-cart")
      }
    })
  }

  // Add click event listeners to all ADD buttons
  const addButtons = document.querySelectorAll(".add-btn")
  addButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".product-card");
      const name = card.querySelector("p").textContent;
      const price = card.querySelector(".price").textContent;
      const image = card.querySelector("img").src;  // Get the image URL

      const existingItemIndex = cart.findIndex((item) => item.name === name)

      if (existingItemIndex > -1) {
        // Item exists in cart, remove it
        cart.splice(existingItemIndex, 1)
        this.textContent = "+ ADD"
        playSound("mouse-remove.mp3")
        this.classList.remove("in-cart")
        showNotification(`Removed ${name} from cart`)

      } else {
        // Item doesn't exist in cart, add it
        cart.push({ name, price,image })
        this.textContent = "Remove"
        this.classList.add("in-cart")
        playSound("mouse-click-sound-233951.mp3")
        showNotification(`Added ${name} to cart`)
      }

      updateLocalStorage()
      updateButtonState()

      // Animate button
      this.classList.add("added")
      setTimeout(() => {
        this.classList.remove("added")
      }, 1000)
    })
  })

  // Initial update of button states
  updateButtonState()

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.textContent = message

    notification.style.position = "fixed"
    notification.style.bottom = "20px"
    notification.style.right = "20px"
    notification.style.backgroundColor = "#000080"
    notification.style.color = "white"
    notification.style.padding = "12px 24px"
    notification.style.borderRadius = "6px"
    notification.style.opacity = "0"
    notification.style.transition = "opacity 0.2s ease-in-out"

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.opacity = "1"
    }, 100)

    setTimeout(() => {
      notification.style.opacity = "0"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Add hover effects to category cards
  const categoryCards = document.querySelectorAll(".category-card")
  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.3s ease-in-out"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add smooth scroll behavior and active highlighting to section links
  const sectionLinks = document.querySelectorAll('a[href^="#section"]')
  sectionLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    sectionLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"))
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        sectionLinks.forEach((link) => link.classList.remove("active"))
        link.classList.add("active")
      }
    })
  })
})
