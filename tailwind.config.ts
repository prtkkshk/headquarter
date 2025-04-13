
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				socl: {
					background: '#0F1118',
					text: '#FFFFFF',
					muted: '#A5A8B3',
					buttonBg: '#2A2F42',
					buttonText: '#FFFFFF',
					accent: '#0EA5E9',
					accentDark: '#0284C7',
					secondary: '#F97316',
					cardBg: '#171923',
					darkAccent: '#6366F1',
					highlightBg: '#1A1E2C',
					border: '#2D3748',
					glow: '#0EA5E9',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 }
				},
				'fade-in-up': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 }
				},
				'glow-pulse': {
					'0%, 100%': { 
						opacity: 0.7,
						boxShadow: '0 0 15px 2px rgba(14, 165, 233, 0.3)'
					},
					'50%': { 
						opacity: 1,
						boxShadow: '0 0 20px 5px rgba(14, 165, 233, 0.5)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'glow-pulse': 'glow-pulse 3s infinite'
			},
			backgroundImage: {
				'gradient-radial-soft': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'gradient-cosmos': 'linear-gradient(to bottom right, #0F1118, #171923, #1A1E2C)',
				'dotted-pattern': 'url("/dotted-pattern.svg")',
				'noise': 'url("/noise.png")'
			},
			boxShadow: {
				'glow-sm': '0 0 10px 1px rgba(14, 165, 233, 0.3)',
				'glow-md': '0 0 15px 2px rgba(14, 165, 233, 0.3)',
				'glow-lg': '0 0 20px 5px rgba(14, 165, 233, 0.3)',
				'glow-accent': '0 0 15px 2px rgba(249, 115, 22, 0.3)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.25)'
			},
			transitionProperty: {
				'glow': 'box-shadow, transform, opacity',
				'all-smooth': 'all'
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
