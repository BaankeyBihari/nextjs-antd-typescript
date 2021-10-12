import "antd/dist/antd.css"
import "@styles/vars.css"
import "@styles/global.css"

import { AppPropsType } from "next/dist/shared/lib/utils"

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />
}
