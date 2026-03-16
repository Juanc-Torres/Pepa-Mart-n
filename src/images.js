const images = Object.values(
  import.meta.glob("./assets/images/*.{png,jpg,jpeg,webp}", { eager: true })
).map((file) => file.default)

export default images