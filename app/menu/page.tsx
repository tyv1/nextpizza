import Button from '@/components/Button'
import styles from './page.module.css'

const URL = 'https://tyv1.pythonanywhere.com/api/pizzas/'

async function getData() {
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}


export default async function Home() {
  const data = await getData()

    return (
      <main className="min-h-screen">
          <h1 className="text-6xl font-bold text-center">Menu</h1>
          <div className={styles.list}>
            {data.map((pizza: any) => (
              <div className={styles.item} key={pizza.id}>
                <h2 className={styles.name}>{pizza.name}</h2>
                <p className={styles.description}>{pizza.description}</p>
                <p className={styles.toppings}>{pizza.toppings.map(
                  (topping: any) => topping.name
                ).join(', ')}
                </p>
                <div className={styles.imgWrapper}>
                  <img src={pizza.image} alt={pizza.name} />
                </div>
                <p className={styles.price}>{pizza.price},-</p>
                <Button>Add to cart</Button>
              </div>
            ))}
          </div>
      </main>
    )
  }
  