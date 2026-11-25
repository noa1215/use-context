import {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import styles from './Content.module.css'

export default function Content(){

const { theme } = useContext(ThemeContext)

return (<>
<div className={styles[theme]}>
<div className={styles.card}>welcome</div>
<div className={styles.card}>about</div>
<div className={styles.card}>setting</div>
</div>
    </>)
}