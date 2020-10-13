/** @jsx jsx */
import {jsx} from '@emotion/core'

const Home = ({message}) => {
    return (
        <div
            css={{
                height: '600px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {message}
        </div>
    )
}

export default Home
