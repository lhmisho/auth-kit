// import "../style/styles.scss"
import Layout from '../components/layout/Layout'
import Link from 'next/link'
const Index = () => (
  <Layout>
    <div className="example">
      <Link href="/signin/sign-in-one"><a>Sign in One</a></Link>
      <Link href="/signin/sign-in-two"><a>Sign in Two</a></Link>
      <p>Hello Next.js</p>
    </div>
  </Layout>
);

export default Index;