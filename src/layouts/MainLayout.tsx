import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import styles from './MainLayout.module.css'
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
    </>
  )
}
