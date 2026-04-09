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
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/send-to-telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });


            const data = await res.json();
            if (!res.ok) {
                console.error('Ошибка от API-роута:', data);
                throw new Error(data.error || `Status ${res.status}`);
            }

            console.log('Запись успешно создана:', data);
            setFormData({ firstName: '', lastName: '', phone: '', carModel: '', notes: '' });
            alert('Ваша заявка принята! Мы скоро свяжемся с вами.');
        } catch (err) {
            const errorMessage = err instanceof Error
                ? err.message
                : 'Произошла неизвестная ошибка';

            console.error('Ошибка при создании записи:', err);
            alert(`Произошла ошибка: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

}