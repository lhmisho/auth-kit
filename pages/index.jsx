// import "../style/styles.scss"
import Layout from '../components/layout/Layout'
import Link from 'next/link'
const Index = () => (
  <Layout>
    <div className="example">
      <Link href="/signin/sign-in-one"><a>Sign in One</a></Link>
      <Link href="/signin/sign-in-two"><a>Sign in Two</a></Link>
      <Link href="/signin/otp-signin"><a>Otp signin</a></Link>
      <Link href="/ap"><a>apointment</a></Link>
      <Link href="/signup/flat"><a>signup flat</a></Link>
      <Link href="/checkout/horizontal"><a>checkout</a></Link>
      <p>Hello Next.js</p>
    </div>
  </Layout>
);

export default Index;