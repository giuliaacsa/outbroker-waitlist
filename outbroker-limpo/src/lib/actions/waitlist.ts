'use server'

import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI!
const MONGODB_DB = process.env.MONGODB_DB || 'outbroker'
const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION || 'waitlist'

interface WaitlistEntry {
  name: string
  email: string
  phone: string
  creci?: string
  role: 'buyer' | 'realtor'
  createdAt: Date
}

export async function addToWaitlist(entry: WaitlistEntry) {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI não configurada')
    }

    const client = await MongoClient.connect(MONGODB_URI)
    
    try {
      const db = client.db(MONGODB_DB)
      const collection = db.collection(MONGODB_COLLECTION)

      // Verificar se email já existe
      const existing = await collection.findOne({ email: entry.email })
      if (existing) {
        return {
          success: false,
          error: 'Este e-mail já está cadastrado na lista de espera.'
        }
      }

      // Inserir novo registro
      await collection.insertOne({
        ...entry,
        createdAt: new Date()
      })

      return { success: true }
    } finally {
      await client.close()
    }
  } catch (error: any) {
    console.error('Erro ao salvar no MongoDB:', error)
    return {
      success: false,
      error: error.message || 'Erro ao processar cadastro. Tente novamente.'
    }
  }
}