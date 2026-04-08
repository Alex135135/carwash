'use client'
import s from "./page.module.scss"
import { useState } from "react"

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        carModel: '',
        notes: ''
    })
    const [loading, setloading] = useState(false)
}
