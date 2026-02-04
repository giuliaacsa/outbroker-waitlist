'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { addToWaitlist } from "@/lib/actions/waitlist"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

// Função para aplicar máscara de telefone
const applyPhoneMask = (value: string): string => {
  const numbers = value.replace(/\D/g, '')
  
  if (numbers.length === 0) return ''
  
  if (numbers.length <= 2) {
    return `(${numbers}`
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  } else if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }
}

// Função para remover máscara
const removePhoneMask = (value: string): string => {
  return value.replace(/\D/g, '')
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "", // Guarda sem máscara (apenas números)
    phoneMasked: "", // Guarda com máscara (para display)
    email: "",
    creci: "",
    role: "buyer" as "buyer" | "realtor"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      // Aplica máscara para display
      const masked = applyPhoneMask(value)
      // Remove máscara para salvar
      const unmasked = removePhoneMask(value)
      
      setFormData(prev => ({ 
        ...prev, 
        phone: unmasked,
        phoneMasked: masked
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Validação
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        throw new Error("Por favor, preencha todos os campos obrigatórios")
      }

      // Valida telefone (pelo menos 10 dígitos)
      if (formData.phone.length < 10) {
        throw new Error("Telefone inválido. Digite pelo menos 10 números.")
      }

      // Envia para o banco
      const result = await addToWaitlist({
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // Já está sem máscara
        creci: formData.creci,
        role: formData.role,
        createdAt: new Date()
      })

      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
          setFormData({ 
            name: "", 
            phone: "", 
            phoneMasked: "", 
            email: "", 
            creci: "", 
            role: "buyer" 
          })
        }, 2000)
      } else {
        throw new Error(result.error || "Erro ao cadastrar")
      }
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">Entre para a Lista de Espera</h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Seja um dos primeiros a usar o OutBroker
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6">
                {isSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Cadastro realizado com sucesso!</h3>
                    <p className="text-gray-600">
                      Em breve entraremos em contato com mais informações.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Role Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Você é *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, role: "buyer" }))}
                          className={`p-3 rounded-lg border transition-all ${
                            formData.role === "buyer"
                              ? "bg-primary/10 border-primary text-primary"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="font-medium">Comprador</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, role: "realtor" }))}
                          className={`p-3 rounded-lg border transition-all ${
                            formData.role === "realtor"
                              ? "bg-primary/10 border-primary text-primary"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="font-medium">Corretor</span>
                        </button>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nome Completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>

                    {/* Phone - COM MÁSCARA */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phoneMasked}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                      <p className="text-xs text-gray-500">
                        Digite seu número com DDD
                      </p>
                    </div>

                    {/* CRECI (conditionally shown for realtors) */}
                    {formData.role === "realtor" && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          CRECI (Opcional)
                        </label>
                        <Input
                          name="creci"
                          value={formData.creci}
                          onChange={handleChange}
                          placeholder="Seu número de registro"
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>
                    )}

                    {/* Error message */}
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Submit button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-base"
                    >
                      {isSubmitting ? "CADASTRANDO..." : "ENTRAR NA LISTA"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Ao cadastrar, você concorda em receber comunicações sobre o lançamento do OutBroker.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}