const videos = Object.values(
  import.meta.glob("./assets/videos/*.{mp4,webm}", { eager: true })
).map((file) => file.default)

export default videos