import Head from 'next/head'
import Header from '@components/Header'
<script src="https://run.confettipage.com/here.js" data-confetticode="U2FsdGVkX1/Uar+zOtMPNF+hnuxkU4ZmRZuD4gZFnM42ZOViVSniwjn3fwJn6vO+9F5xw19+Fk+33MD48MdZyrwZhrKF3YtI0GnBY/KxTiM+Dx+L9MeLWQwolx6R43CKPcyO3L3a7rQnpXsLFnRQVJEKkuBWo1cJgAdnVHnm2p0JKhzFURU6K+JSwBFMKADMk4UKv7welBGFhN2phul6d4yVnJrYxLqbdXXl7zIoWAaHkpvrTOQdpWtgVJsuOszCkmVdcpUh6nqc9DlhKT18VS731bHQjRz+mmuDVzm2HaMn7NBhiDv/XbJ+6FvDAdAlDbxaeodQOGMGk2SddAxihz4CAQbkk+znigCdVn9zdK3vWQ3xQb9ZVBTE86fN11F449MaEyrb6aEoH424/To2bsmN0Znxq8BeMPQXqICTv8ScINQAOeAWlnrt/2aU9KYsSANO/NgYnz/0d7Dc0U5H/BiuXxXJVl04RpE5p+1dCaUVod6KVCWlwMxh8rj3ST8/bRtcj23C/0GLlmWD75jryiXzOd6bqhbCNJyAhCJYJsMJ8aF0OqR5WzpoxddyU+O+Wgm/JVs4sI/8ZzaEkKFsRyKvKcPaTgB3i4vv91i3TCy9proYzmi8ctnZShXPW/qWWlt/JggbiVbFnZRyfh/LskPTlpY1fWnfuReGP/lq8vSH00a05sz3AepNNmtsFVTg"></script>
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hey, Yash.</title>
      </Head>

      <main>
        <Header title="Happy Birthday!" />
        <p className="description">
          Someone's turning 30. LOL.
        </p>
      </main>
    </div>
  )
}
