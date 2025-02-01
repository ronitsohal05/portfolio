import { Intro } from './Intro'
import { SocialIcons } from './SocialIcons'
import { WireframeAnimation } from './WireframeAnimation'


export function Homepage() {
    return (
        <div style={{ 
            paddingTop: '64px',
            height: 'calc(100vh - 64px)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden' // Add this
        }}>
            {/* Wireframe Animation Container */}
            <div style={{ 
            flex: 1, // Increased flex growth
            width: '70%', // Increased width for more space
            height: '70%', // Full height of the viewport
            display: 'flex',
            alignItems: 'center',
            marginLeft: '5%',
            marginRight: '10%', // Adjusted margin for better spacing
            position: 'relative'
            }}>
            <WireframeAnimation />
            </div>

            {/* Name & Description (Middle) */}
            <div style={{
            flex: 1,
            display: 'flex text-left',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
            }}>
            <Intro
                name="Ronit Sohal"
                characteristics={['developer', 'problem-solver', 'team player']}
            />
            </div>

            {/* Social Icons (Fixed Right Side) */}
            <div style={{
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '16px'
            }}>
            <SocialIcons />
            </div>
        </div>
    )
}