'use client'
import { BorderBeam } from "../../components/ui/border-beam";
import FlickeringGrid from "../../components/ui/flickering-grid";
import { collection, getDoc, getDocs, doc, getFirestore, query, where } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/utils/firebaseConfig';
import React, { useContext, useEffect, useState } from 'react';
import FeelingImage from "../../components/FeelingImage.js";
import Loader from "../../components/loader.js";
import NumberTicker from "../../components/ui/number-ticker";
import BlurIn from "../../components/ui/blur-in";
import HyperText from "../../components/ui/hyper-text";
import Particles from "../../components/ui/particles";

export default function Home() {

    const belNames = ["mi reina hermosa", "mi amor", "hermosura", "mi vida", "Bel guapísima", "hermosa de mi vida", "chibola mepa",
        "mi Bel tiernita", "Belinda carita bonita", "amor hermosa", "esposita", "esposa hamburguesita🍔", "amor de mi vida", "amor mío", "mi sensual Belinda",
        "baby bellísima", "baby preciosa", "baby hermosísima", "vida mía", "mi Bel con ojitos bellos", "mi universo", "mi Jazmincita", "mi tierna Bel", "mi Bel preciosa", "esposa hermosa",
        "amorcito preciosa", "amorcito hermosa", "amorcito", "Belinda Jazmín", "Bel de mi corazón", "bebé hermosa", "bebé preciosa", "Bel increíble"];

    const excludedIds = ["8dLtxP2MeiQk7fyIR9gD", "XzXqHVqVynRMvlg1pNHO"];

    const [items, setItems] = useState([]);
    const [cardImage, setCardImage] = useState("");
    const [reasons, setReasons] = useState("");
    const [reasonNumber, setReasonNumber] = useState("");
    const [reasonText, setReasonText] = useState("");
    const [loading, setLoading] = useState(false); // New loading state
    const [belAlias, setBelAlias] = useState([]);

    useEffect(() => {

        const getAliasBel = () => {
            const randomAlias = [];
            const usedIndices = new Set();
            while (randomAlias.length < 2) {
                const randomIndex = Math.floor(Math.random() * belNames.length);
                if (!usedIndices.has(randomIndex)) {
                    usedIndices.add(randomIndex);
                    let name = belNames[randomIndex];
                    /*if (randomAlias.length === 0) {
                        name = name.charAt(0).toUpperCase() + name.slice(1);
                    }*/
                    randomAlias.push(name);
                }
            }
            setBelAlias(randomAlias);
        }

        const fetchItems = async () => {
            setLoading(true); // Start loading spinner
            const itemsCollection = collection(db, "moments");
            try {
                // Fetch items from "moments" collection
                const itemsCollection = collection(db, "moments");
                const snapshot = await getDocs(itemsCollection);

                if (snapshot.size === 0) {
                    console.log("No se obtuvieron items");
                } else {
                    setItems(snapshot.docs.filter(doc => !excludedIds.includes(doc.id))
                        .map((doc) => ({ id: doc.id, ...doc.data() })));
                }

                const reasonsCollection = collection(db, "reasons");
                const snapshot2 = await getDocs(reasonsCollection);

                if (snapshot2.size === 0) {
                    console.log("No se obtuvieron reasons");
                } else {
                    setReasons(snapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        }

        fetchItems();
        getAliasBel();

    }, []);

    useEffect(() => {
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            setCardImage(items[randomIndex].imgUrl);
        }
    }, [items]);

    useEffect(() => {
        if (reasons.length > 0) {
            // Generate a random number between 1 and 365
            const randomId = Math.floor(Math.random() * 365) + 1;
            let razon = reasons[randomId].razon;
            let numerorazon = reasons[randomId].id.toString();
            razon = razon.endsWith('.') ? razon.slice(0, -1) : razon;
            razon = razon.charAt(0).toLowerCase() + razon.slice(1);
            setReasonText(razon);
            setReasonNumber(`Razón ${numerorazon}`);
            console.log(reasons[randomId]);
        }
    }, [reasons]);

    return (<>
        <div className="m-0 relative h-screen w-full bg-black overflow-hidden border">
            <Particles
                className="absolute inset-0"
                quantity={1000}
                ease={80}
                color={"#ffffff"}
                refresh
            />

            <div className="py-5 m-auto flex flex-col justify-center">
                <p className="text-center text-8xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker className={"font-delius  text-white font-bold"} value={365} delay={1.5} />
                </p>
                <p className="font-fuzzy px-10 my-4 text-2xl text-center text-white italic">razones por las que te amo, {belAlias[1]} ❤️</p>
            </div>

            <FeelingImage url={cardImage} />
            <div className="mx-auto mt-10 mb-2 w-7/12">
                <HyperText
                    className="m-auto text-center text-5xl font-wittgenstein font-light text-white dark:text-white"
                    text={reasonNumber}
                />
            </div>

            <BlurIn word={`Te amo porque ${reasonText}, ${belAlias[0]}🤍`}
                className="mt-6 mb-4 px-8 text-center font-wittgenstein text-xl font-light text-white dark:text-white"
            ></BlurIn>
        </div>


        {loading && <Loader />}
    </>


    );
}
