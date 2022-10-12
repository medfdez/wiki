import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Jira = ({ text }) => {
  return (
    <Link href={`https://jira.tigo.com.hn/browse/ONEAPP-${text}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text}
      </a>
    </Link>
  )
}

export default Jira
