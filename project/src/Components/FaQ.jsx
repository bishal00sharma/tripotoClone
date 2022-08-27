import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What are Credits?",
            content: `The Company allows you to earn credits for certain actions you take on the Website, subject to Credit Policy mentioned below this section.`,
            
        },
        {
            title: "How to earn Credits?",
            content:
              "There are multiple ways in which you can earn credits as mentioned below: by writing blogs, posting photoblogs, writing answers on community, giving feedback on travel agents, referring Tripoto to friends, by winning contests; by filling lead form (as one-time benefit)",
        },
        {
            title: "What is the value of one Credit?",
            content: `The exchange value of one Credit is equivalent to INR 4, which is a limited offer and may be modified/withdraw as per sole discretion of Tripoto, any time.`,
        },
        {
            title: "Can Credits expire?",
            content: `Credits may set to expire and Tripoto reserves the right to change the validity/ expiry of Credits at its sole discretion without notice.`,
        },
        {
            title: "How can I redeem Credits?",
            content: `Credits can be redeemed on making a successful transaction towards a select holiay package at the time of making payment through a Payment Link facilitated by Tripoto on Tripoto’s website or for purchasing a Goodie Bag (if made available on the Website), subject to terms and conditions provided by Tripoto.`,
        },
        {
            title: "Can I use Credits on other purchases on Tripoto that aren’t holiday packages?",
            content: `No. Credits can be redeemed on purchase of a holiday package provided by designated travel partners or for purchasing a Goodie Bag (if made available on the website) subject to terms and conditions provided by Tripoto.`,
        },
        {
            title: "Can I transfer Credits to another account?",
            content: `No, Credits cannot be transferred to any other account including bank account. Credits are earned and awarded on the website of Tripoto and redeemed on Tripoto, based on terms and conditions provided on the website.  Further, Credits cannot be exchanged/transferred/sold/gifted to any third party.`,
        },
        {
            title: "I just published content on Tripoto, but I haven’t received any Credits, why?",
            content: `Credits are awarded only after content uploaded is approved by Tripoto editors. Please wait for your published content to be approved.`,
        },

        {
            title: "I invited a friend on Tripoto, but I haven’t received any Credits, why?",
            content: `Credits are awarded only after a new/unique user has created an account and verified their email address. You will not receive Credits if your friend has an existing account with Tripoto.`,
        },
        {
            title: "How would I know if the payment link shared by the travel partner is his own or sent through Tripoto?",
            content: `All communication including payment links will have Tripoto’s logo and branding. However, if you feel that the payment link or communication is misleading and not generated through Tripoto, then you should ask the travel agent to share payment link generated through Tripoto’s system only. To raise a concern, please write to us at info@tripoto.com.`,
        },
    ],
};

const styles = {
   bgColor: 'white',
    titleTextColor: "teal",
    rowTitleColor: "blue",
     rowContentColor: 'grey',
     arrowColor: "red",
};

const config = {
    animate: true,
    tabFocus: true
};

export default function FaQ() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}