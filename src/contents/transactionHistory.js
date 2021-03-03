import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { UserContext } from '../providers/UserProvider'

import { FaPlus } from "react-icons/fa";
import AvatarImage from '../assets/images/icons/normal_avatar.png'
import { firestore } from '../firebase';
import '../assets/css/transaction.css'


function TransactionHistory() {
    const user = useContext(UserContext);

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const getTransactionHistory = async () => {
            const data = (await firestore.collection('TransactionHistory').where('userID', '==', user.uid).get()).docs;
            setHistories(data);
        }

        getTransactionHistory();
    }, []);

    return (
        <div className="w-100">
            <div className="header chat-header align-items-center d-flex">
                <div className="position-absolute header-users d-flex">
                    <div className="header-avatar position-relative d-flex">
                        <Image
                            src={user.avatarUrl ? user.avatarUrl : AvatarImage} width={30} height={30}
                            fluid className="header-avatar bg-white" />
                        <div
                            className="badge-for-avatar bg-success rounded-circle border border-white"
                        ></div>
                    </div>
                    <div className="ml-1">
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className="px-1 bg-dark">
                <div className="content-body p-3 text-center">
                    <div>
                        <input placeholder="Find transaction" className="w-100"></input>
                    </div>
                    <div className="w-100">
                        {
                            histories.map((item, index) => (
                                <div key={index} className="w-100 d-flex justify-content-between text-20 text-white py-3">
                                    <span>
                                        {item.data().description}
                                    </span>
                                    <span>
                                        Amount: {item.data().amount}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory
