import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any
}

const Items = ({ product }: Props) => {
  return (
    <S.Wrapper>
      <motion.h1 layoutId="header">{product}</motion.h1>
      <S.Container>
        <motion.div layoutId={product}>
          <Image
            src={'/img/' + product + '.jpg'}
            width={500}
            height={500}
            objectFit="cover"
          />
        </motion.div>
      </S.Container>
      <Link href="/">
        <motion.h1
          animate={{
            scale: [1, 1.5, 1.5, 1, 1]
          }}
        >
          HOME
        </motion.h1>
      </Link>
    </S.Wrapper>
  )
}

export default Items
