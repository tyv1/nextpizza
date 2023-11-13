import Button from '@/components/Button'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className={styles.hero}>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to our Pizza Place</h1>
          <p className="text-lg mb-8">We offer a wide variety of delicious pizzas made with fresh ingredients.</p>
          <Link href="/menu">
            <Button>View Menu</Button>
          </Link>
        </div>
      </section>
      <section className={styles.cards}>
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={styles.card}>
              <img src='/pizza1.jpg' alt="Pizza" className={styles.image} />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Margherita</h3>
                <p className="text-gray-700">Tomato sauce, mozzarella, and fresh basil.</p>
                <p className="text-gray-700 mt-2">$10.99</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src='/pizza2.jpg' alt="Pizza" className={styles.image} />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Pepperoni</h3>
                <p className="text-gray-700">Tomato sauce, mozzarella, and pepperoni.</p>
                <p className="text-gray-700 mt-2">$12.99</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src='/pizza3.jpg' alt="Pizza" className={styles.image} />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Hawaiian</h3>
                <p className="text-gray-700">Tomato sauce, mozzarella, ham, and pineapple.</p>
                <p className="text-gray-700 mt-2">$13.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8">We are a family-owned pizza place that has been serving delicious pizzas for over 20 years. Our pizzas are made with fresh ingredients and cooked to perfection in our wood-fired oven.</p>
          <Button>Learn More</Button>
        </div>
      </section>
      <section className={styles.contact}>
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-400 p-2 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-400 p-2 rounded-lg" />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full border border-gray-400 p-2 rounded-lg"></textarea>
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
