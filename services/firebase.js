// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {collection, getDocs, query, where} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getPdfs = async () => {
	const pdfs = [];
	const querySnapshot = await getDocs(collection(db, 'pdfs'));
	querySnapshot.forEach((doc) => {
		const pdf = {
			id: doc.id,
			...doc.data(),
		};
		pdfs.push(pdf);
	});

	return pdfs;
};

const getPdf = async (slug) => {
	const q = query(collection(db, 'pdfs'), where('slug', '==', slug));

	let pdf = null;
	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		pdf = {
			id: doc.id,
			...doc.data(),
		};
	});

	return pdf;
};

export {app, db, getPdfs, getPdf};
