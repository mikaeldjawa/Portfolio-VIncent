import BrandingIcon from '@/src/components/icons/home/BrandingIcon';
import EmailIcon from '@/src/components/icons/home/EmailIcon';
import LocationIcon from '@/src/components/icons/home/LocationIcon';
import PhoneIcon from '@/src/components/icons/home/PhoneIcon';
import SeoIcon from '@/src/components/icons/home/SeoIcon';
import UiUxIcon from '@/src/components/icons/home/UiUxIcon';
import WebDevIcon from '@/src/components/icons/home/WebDevIcon';
import {
	FaBlog,
	FaBriefcase,
	FaFolderOpen,
	FaGraduationCap,
	FaRegEnvelopeOpen,
} from 'react-icons/fa';
import { GrTasks } from 'react-icons/gr';
import { BiCheckDouble, BiCommentCheck } from 'react-icons/bi';

import springbootImage from "@/public/assets/img/skill/springboot.png";
import reactImage from "@/public/assets/img/skill/react.png";
import jiraImage from "@/public/assets/img/skill/jira.png";
import figmaImage from "@/public/assets/img/skill/figma.svg";
import postmanImage from "@/public/assets/img/skill/postman.png";
import githubImage from "@/public/assets/img/skill/github.png";
import ssmsImage from "@/public/assets/img/skill/ssms.png";

import partner1Image from '@/public/assets/img/partners/logo1.svg';
import partner2Image from '@/public/assets/img/partners/logo2.svg';
import partner3Image from '@/public/assets/img/partners/logo3.svg';
import partner4Image from '@/public/assets/img/partners/logo4.svg';

import userImage from '@/public/assets/img/user-sidebar-thumb.jpg';
import userImageLight from '@/public/assets/img/user-sidebar-thumb-light.jpg';

import portfolioImage1Thumb from '@/public/assets/img/portfolio/portfolio-img1.png';
import portfolioImage1 from '@/public/assets/img/portfolio/portfolio-img1.png';

import portfolioImage2Thumb from '@/public/assets/img/portfolio/portfolio-img2.png';
import portfolioImage2 from '@/public/assets/img/portfolio/portfolio-img2.png';

import portfolioImage3Thumb from '@/public/assets/img/portfolio/portfolio-img3.png';
import portfolioImage3 from '@/public/assets/img/portfolio/portfolio-img3.png';

import portfolioImage4Thumb from '@/public/assets/img/portfolio/portfolio-img4.png';
import portfolioImage4 from '@/public/assets/img/portfolio/portfolio-img4.png';

import projectInner1Image from '@/public/assets/img/blog/article-inner1.png';
import projectInner2Image from '@/public/assets/img/blog/article-inner2.png';

import blog1Thumbnail from '@/public/assets/img/blog/article1.png';
import blog1Image from '@/public/assets/img/blog/article1.png';
import blog2Thumbnail from '@/public/assets/img/blog/article2.png';
import blog2Image from '@/public/assets/img/blog/article2.png';
import blog3Thumbnail from '@/public/assets/img/blog/article3.png';
import blog3Image from '@/public/assets/img/blog/article3.png';
import blog4Image from '@/public/assets/img/blog/article4.png';

import author1 from '@/public/assets/img/testimonial/author1.png';
import author2 from '@/public/assets/img/testimonial/author2.png';
import { IoHomeOutline } from 'react-icons/io5';

export const introduce = {
	iconBox: {
		Icon: <IoHomeOutline className='text-theme' size={14} />,
		title: 'INTRODUCE',
	},
	heading: {
		heading1: 'Bridging Business &',
		heading2: 'Technology',
	},
	desc: (
		<p>
			I am a{' '}
			<span className='font-medium text-black dark:text-white/90'>
				IT Business Analyst and Developer
			</span>{' '}
			with hands-on experience in designing reconciliation systems and automating
			financial processes in the banking sector. I have a proven ability to bridge business needs and technical solutions through Agile
			collaboration, full-stack development, and clear documentation.
		</p>
	),
	jobs: [
		{
			id: 1,
			title: 'Available for work',
			icon: <BiCheckDouble size={25} className='text-theme mr-1' />,
		},
		{
			id: 2,
			title: 'Full Time Job',
			icon: <BiCheckDouble size={25} className='text-theme mr-1' />,
		},
	],
};

export const partners = [
	{
		imgUrl: partner1Image,
		altText: 'freeCodeCamp',
		link: '#',
	},
	{
		imgUrl: partner2Image,
		altText: 'IBM',
		link: '#',
	},
	{
		imgUrl: partner3Image,
		altText: 'Meta',
		link: '#',
	},
	{
		imgUrl: partner4Image,
		altText: 'Microsoft',
		link: '#',
	},
];

export const technologies = [
	{
		id: 1,
		title: 'HTML5 & CSS3',
		skill: '90',
		url: '#',
	},
	{
		id: 2,
		title: 'React.js',
		skill: '80',
		url: '#',
	},
	{
		id: 3,
		title: 'TailwindCSS',
		skill: '70',
		url: '#',
	},
];

export const userDetails = [
	{
		field: 'Phone',
		value: '+62 851-5640-4021',
		link: 'tel:+6285156404021',
	},
	{
		field: 'LinkedIn',
		value: 'vincentwijaya2701',
		link: 'https://www.linkedin.com/in/vincentwijaya2701/',
	},
	{
		field: 'Language',
		value: 'Indonesia',
	},
	{
		field: 'Email',
		value: 'vince.wijaya27@gmail.com',
		link: 'mailto:vince.wijaya27@gmail.com',
	},
	{
		field: 'GitHub',
		value: 'vincentkled',
		link: 'https://github.com/vincentkled',
	},
];

export const userDetailsSidebar = {
	userImage: userImage,
	userImageLight: userImageLight,
	userName: 'Vincent Wijaya',
	designations: ['IT Business Analyst', 'Developer'],
	basicInfo: [
		{
			id: 1,
			field: 'Residence',
			value: 'Indonesia',
		},
		{
			id: 2,
			field: 'City',
			value: 'Jakarta',
		},
		{
			id: 3,
			field: 'Age',
			value: (new Date().getFullYear() - 2000).toString(),
		},
	],
	skillsInfo: [
		{
			id: 1,
			name: 'Java',
			value: 90,
		},
		{
			id: 2,
			name: 'SQL',
			value: 80,
		},
		{
			id: 3,
			name: 'JS',
			value: 55,
		},
	],
};

export const projectExperiences = [
	{
		title: 'Years Of Experience',
		count: 1,
		postFix: true,
	},
	{
		title: 'Handled Projects',
		count: 5,
		postFix: true,
	},
	{
		title: 'Available Hours',
		count: 45,
		postFix: true,
	},
	{
		title: 'Certifications',
		count: 3,
		postFix: false,
	},
];

export const services = {
	servicesHeading: {
		icon: <FaBriefcase className='text-theme' />,
		title: 'SERVICES',
		heading: 'My',
		coloredHeading: 'Services',
		description:
			'Crafting Intuitive and Engaging User Experiences with Cutting-Edge Frontend Development.',
	},
	servicesData: [
		{
			id: 1,
			number: '01',
			title: 'UI/UX Design',
			desc: 'Transforming ideas into visually stunning & user-friendly interfaces, ensuring a seamless & engaging user experience.',
			icon: <UiUxIcon />,
		},
		{
			id: 2,
			number: '02',
			title: 'Web Development',
			desc: 'I specialize in creating visually stunning, responsive websites that offer seamless user experiences & elevate your digital presence.',
			icon: <WebDevIcon />,
		},
		{
			id: 3,
			number: '03',
			title: 'SEO / Marketing',
			desc: 'Enhance your online presence & drive organic traffic with our tailored SEO & marketing strategies designed to boost your visibility while growing your audience.',
			icon: <SeoIcon />,
		},
		{
			id: 4,
			number: '04',
			title: 'Branding & Strategy',
			desc: 'Transform your brand vision into a cohesive & impactful digital presence with tailored strategies that resonate and engage.',
			icon: <BrandingIcon />,
		},
	],
};

export const skills = {
	skillsHeading: {
		icon: <FaGraduationCap className='text-theme' />,
		title: 'SKILLS',
		heading: 'My',
		coloredHeading: 'Advantages',
		description: 'My Core Skills and Strengths',
	},
	skillsData: [
		{
			image: springbootImage?.src,
			percent: 90,
			name: 'Java Spring Boot',
		},
		{
			image: reactImage?.src,
			percent: 85,
			name: 'ReactJS',
		},
		{
			image: figmaImage?.src,
			percent: 75,
			name: 'Figma',
		},
		{
			image: postmanImage?.src,
			percent: 70,
			name: 'Postman',
		},
		{
			image: githubImage?.src,
			percent: 70,
			name: 'GitHub',
		},
		{
			image: jiraImage?.src,
			percent: 95,
			name: 'JIRA',
		},
		{
			image: ssmsImage?.src,
			percent: 70,
			name: 'SQL Server Management Studio (SSMS)',
		},
	],
};

export const resume = {
	resumeHeading: {
		icon: <FaFolderOpen className='text-theme' />,
		title: 'RESUME',
		heading: 'Work',
		coloredHeading: 'Experience',
		description:
			'As an IT Business Analyst and Developer, I have designed reconciliation systems and automated financial processes in the banking sector. I have experience with Agile collaboration, full-stack development, and creating clear documentation.',
	},
	resumeData: [
		{
			platform: 'Mastersystem Infotama',
			duration: 'July 2025-August 2025',
			position: 'Developer (Placement at PT Permata Bank - Billpayment Axis Prepaid)',
			description: ["Designed and implemented a new database structure from the ground up to support Axis-only prepaid reconciliation, following the decoupling of Axis from the previously integrated XL-Axis reconciliation system.",
				"Enhanced existing reconciliation modules to align with updated transaction flows and Axis-specific requirements.",
				"Designed and implemented MySQL database structures with SQL Server Management Studio.",
				"Built reconciliation applications for Axis Prepaid transactions including File Load, RDE, Validation Reconciliation, RPT, and Global Update.",
				"Coordinated closely with clients to understand business requirements, aligning system development with their organizational goals.",
				"Created journal transactions: Force Credit (returning funds from the bank to the customer), Force Debit (withdrawing funds from the customer to the bank), and Journal CE (processed fund transfers from Bank Permata to PT Mitracom, ensuring accurate and timely settlement through automated journal entries).",
				"Conducted comprehensive unit testing (SIT) and user acceptance testing (UAT) to ensure system quality, functionality, and security before deployment.",
				"Created detailed and structured system documentation, supporting clear understanding and facilitating future maintenance and development.",
				"Delivered automated reports for transaction matching and journal status, reducing manual audit time by 30%."
			],
		},
		{
			platform: 'Mastersystem Infotama',
			duration: 'July 2025',
			position: 'Developer (Placement at PT Bank Tabungan Negara (BTN) - Billpayment Modern Channel)',
			description:
				[
					"Developed reconciliation applications tailored to client company needs, ensuring process efficiency and data accuracy.",
					"Responsible for gathering and analyzing business requirements, and preparing Technical Specification Documents (TSD).",
					"Designed and developed database applications using SQL Server Management Studio (SSMS) to support Indomaret cash deposit (setor tunai) and cash withdrawal (tarik tunai) transaction processing.",
					"Delivered automated reports for transaction matching and journal status, reducing manual audit time by 35%."
				],
		},
		{
			platform: 'Mastersystem Infotama',
			duration: 'March 2025-June 2025',
			position: 'Developer (Placement at PT Permata Bank - QRIS NFC Double Tap)',
			description:
				[
					"Developed reconciliation applications tailored to client company needs, ensuring process efficiency and data accuracy.",
					"Designed and implemented MySQL database structures with SQL Server Management Studio.",
					"Built reconciliation applications for QRIS Double Tap transactions and QRIS Double Tap Hold including File Load, RDE, Validation Reconciliation, RPT, and Global Update.",
					"Coordinated closely with clients to understand business requirements, aligning system development with their organizational goals.",
					"Created journal transactions: Force Credit (returning funds from the bank to the customer), Force Debit (withdrawing funds from the customer to the bank), and Release Hold (processed refunds for held funds older than 10 days, ensuring timely return to customers and accurate journal entries in compliance with reconciliation policies).",
					"Conducted comprehensive unit testing (SIT) and user acceptance testing (UAT) to ensure system quality, functionality, and security before deployment.",
					"Created detailed and structured system documentation, supporting clear understanding and facilitating future maintenance and development.",
					"Delivered automated reports for transaction matching and journal status, reducing manual audit time by 30%."
				],
		},
		{
			platform: 'Mastersystem Infotama',
			duration: 'October 2024-March 2025',
			position: 'IT Business Analyst (Placement at PT Bank BNI Persero Tbk - Loan Management System)',
			description:
				[
					"Contributed to LMS project execution using Agile SCRUM methodology.",
					"Managed sprint backlogs and monitored progress via JIRA.",
					"Reviewed Figma designs for UI/UX consistency with business requirements.",
					"Led integration coordination with BP Tapera for eKPR Subsidy, ensuring seamless data alignment between platforms.",
					"Supported the development of the BNI Griya Cessie special product.",
					"Prepared detailed Product Requirement Documents (PRD) and Functional Specification Documents (FSD).",
					"Visualized system processes using Whimsical for clearer stakeholder understanding."
				]
		},
		{
			platform: 'PT Bumi Amartha Teknologi Mandiri',
			duration: 'September 2023-December 2023',
			position: 'IT Graduate Development Program - Intern',
			description:
				[
					"Developed a timesheet application using the Waterfall methodology.",
					"Designed and implemented MySQL database structures.",
					"Built back-end systems using Java Spring Boot.",
					"Developed front-end interfaces with ReactJS.",
					"Designed and tested APIs with Postman.",
					"Acted as Project Manager to oversee timelines and deliverables.",
					"Collaborated with development team via GitHub."
				]
		},
	],
};

export const educations = {
	educationsHeading: {
		icon: '',
		title: '',
		heading: 'My',
		coloredHeading: 'Education',
		description:
			'Bachelor\'s Degree in Information Technology from Universitas Bina Sarana Informatika, with a GPA of 3.70.',
	},
	educationsData: [
		{
			institution: 'Universitas Bina Sarana Informatika',
			duration: '2020-2024',
			degree: 'Bachelor\'s Degree in Information Technology GPA: 3.70',
			description: '',
		},
	],
};

export const portfolio = {
	portfolioHeading: {
		icon: <GrTasks className='text-theme' />,
		title: 'PORTFOLIO',
		heading: 'Featured ',
		coloredHeading: 'Projects',
		description: 'Showcasing Creativity in Code',
	},
	projectsData: [
		{
			id: 1,
			image: {
				thumbnail: portfolioImage1Thumb?.src,
				image: portfolioImage1?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES:',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 2,
			image: {
				thumbnail: portfolioImage2Thumb?.src,
				image: portfolioImage2?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Design',
			title: '',
			slug: 'navigating-the-css-landscape',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: '',
				},
				{
					field: 'SERVICES',
					value: 'Responsive, Design',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 3,
			image: {
				thumbnail: portfolioImage3Thumb?.src,
				image: portfolioImage3?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 4,
			image: {
				thumbnail: portfolioImage4Thumb?.src,
				image: portfolioImage4?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
	],
};

export const blogs = {
	blogsHeading: {
		icon: <FaBlog className='text-theme' />,
		title: 'BLOG',
		heading: 'Latest',
		coloredHeading: 'Insights',
		description:
			'Discover the latest insights and trends in Web Development on my blog, where I delve into topics ranging from JavaScript frameworks to API integration, offering valuable perspectives and actionable advice.',
	},
	blogsData: [
		{
			image: {
				thumbnail: blog1Thumbnail?.src,
				image: blog1Image?.src,
			},
			category: 'Frontend',
			date: '03 May 2023',
			title: 'Supercharged Development: Why Gatsby.js Is My Go-To Framework',
			slug: 'supercharged-dev-why-gatsby-is-my-goto',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Frameworks, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'May 03, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Unleashing the Power of Gatsby.js',
					description:
						'Gatsby.js has emerged as one of the most popular static site generators, combining the best of React and GraphQL to deliver blazing-fast, scalable, and feature-rich websites. Whether you&apos;re a frontend developer looking to streamline your workflow or a business aiming for a performant web presence, Gatsby.js has a lot to offer. Gatsby.js is more than just a static site generator—it&apos;s a powerful tool that brings speed, security, and flexibility to web development. With its modern tech stack, rich plugin ecosystem, and robust community support, Gatsby is well-suited for developers and businesses looking to create high-performance websites. Embrace Gatsby.js, and unlock the potential of building fast, scalable, and SEO-friendly web applications. Here are some compelling reasons to love Gatsby.js:',
					descriptionListsTitle: 'Benefits of using Gatsby.js',
					descriptionLists: [
						'Blazing Fast Performance',
						'SEO-Friendly Out of the Box',
						' Rich Plugin Ecosystem',
						'React and GraphQL Integration',
						'Excellent Documentation and Community Support',
						'Scalability and Flexibility',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog2Thumbnail?.src,
				image: blog2Image?.src,
			},
			category: 'UI Design',
			date: '13 May 2023',
			title: 'Navigating the CSS Landscape',
			slug: 'navigating-the-css-landscape',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Tips, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'May 13, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benefits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog3Thumbnail?.src,
				image: blog3Image?.src,
			},
			category: 'UI Design',
			date: '23 May 2023',
			title: 'JavaScript Fundamentals: Understanding the Core Concepts',
			slug: 'homeward-bound-crafting-a-productive-home-office',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Frontend',
					},
					{
						field: 'POSTED ON:',
						value: 'May 23, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benefits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog1Thumbnail?.src,
				image: blog4Image?.src,
			},
			category: 'Code',
			date: '03 June 2023',
			title: 'Integrating External Data into Your Web Projects',
			slug: 'integrating-external-data-into-your-web-projects',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Code',
					},
					{
						field: 'POSTED ON:',
						value: 'June 03, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benefits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog2Thumbnail?.src,
				image: blog2Image?.src,
			},
			category: 'UI Design',
			date: '03 May 2023',
			title: 'Mastering the clock: A guide to time management',
			slug: 'mastering-the-clock-a-guide-to-time-management',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Adrinao Smith',
					},
					{
						field: 'CATEGORY:',
						value: 'Tips & Tricks, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'Noveber 01, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benefits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
	],
};

export const testimonials = {
	testimonialsHeading: {
		icon: <BiCommentCheck className='text-theme' />,
		title: 'TESTIMONIAL',
		heading: 'What',
		coloredHeading: 'People Say:',
		description: ' I deliver beyond their expectations',
	},
	testimonialsData: [
		{
			id: 1,
			image: author1?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					I had the pleasure of working with{' '}
					<span className='font-semibold text-theme'>Lindsey</span> on our
					latest web development project, and I couldn&apos;t be more satisfied
					with the results. From the initial consultation to the final launch,
					she demonstrated exceptional expertise, creativity, and
					professionalism.
				</div>
			),
			name: 'Sarah Yates',
			position: 'Developer',
		},
		{
			id: 2,
			image: author2?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					<span className='font-semibold text-theme'>Lindsey</span> exceeds
					expectations with top-tier coding skills. Reliable, collaborative, and
					a true asset to any project. Highly recommended!
				</div>
			),
			name: 'Mily Martin',
			position: 'Project Manager',
		},
		{
			id: 3,
			image: author1?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					Working with <span className='font-semibold text-theme'>Lindsey</span>{' '}
					is a game-changer. Their coding expertise and commitment to quality
					make every project effortless.
				</div>
			),
			name: 'Alex Johnson',
			position: 'Developer',
		},
	],
};

export const contactInfo = {
	contactInfoHeading: {
		icon: <FaRegEnvelopeOpen className='text-theme' />,
		title: 'CONTACT',
		heading: 'Contact',
		coloredHeading: 'Me.',
		description:
			'I love being able to help people by simplifying some of life&apos;s more complex problems.',
	},
	contactInfoData: [
		{
			id: 1,
			field: 'Location',
			data: 'Fort Walton Beach, FL 32548',
			Icon: <LocationIcon />,
		},
		{
			id: 2,
			field: 'E-mail',
			data: 'lindseykdev@gmail.com',
			Icon: <EmailIcon />,
		},
		{
			id: 3,
			field: 'Phone',
			data: '850.533.5877',
			Icon: <PhoneIcon />,
		},
	],
};
