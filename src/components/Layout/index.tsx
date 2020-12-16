import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

const product: string | string[] = ['glasses', 'ipod', 'nikon', 'watch']

const Layout = () => (
  <S.Wrapper>
    <motion.h1 layoutId="header">Shop</motion.h1>
    <S.Container>
      {product.map((product, index) => (
        <Link href={product} key={index}>
          <motion.div
            layoutId={product}
            animate={{
              scale: 1
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={'/img/' + product + '.jpg'}
              width={300}
              height={300}
              objectFit="cover"
            />
          </motion.div>
        </Link>
      ))}
    </S.Container>
  </S.Wrapper>
)

export default Layout
