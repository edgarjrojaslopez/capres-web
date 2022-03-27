module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/squares.png')",
        'hero-image': "url('src/assets/images/img6.jpg')",
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        content: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
