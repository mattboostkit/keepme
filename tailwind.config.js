/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
        height: {
          '108': '27rem', // 432px (50% more than h-72 which is 18rem/288px)
        },
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			],
  			serif: [
  				'Poppins',
  				'serif'
  			]
  		},
  		colors: {
  			indigo: {
  				'50': '#f0f5ff',
  				'100': '#e5edff',
  				'200': '#cddbfe',
  				'300': '#b4c6fc',
  				'400': '#8da2fb',
  				'500': '#6875f5',
  				'600': '#5850ec',
  				'700': '#5145cd',
  				'800': '#42389d',
  				'900': '#362f78'
  			},
            brand: {
                // Old color
                pink: '#f4cfd9',
                // New color palette
                background: '#F9DBBD',
                highlight: '#FFA5AB',
                card: '#DA627D',
                button: '#A53860',
                accent: '#450920',
            },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			marquee: 'marquee 60s linear infinite',
  			'marquee-fast': 'marquee-fast 15s linear infinite',
  			'marquee-mobile': 'marquee 20s linear infinite',
  			'slide': 'slide 30s linear infinite',
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'marquee-fast': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'slide': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};