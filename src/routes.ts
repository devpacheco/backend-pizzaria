import { Router } from "express";
import multer from 'multer';

//IMPORT DOS USERS
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

//IMPORT DO CATEGORY
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//IMPORT DE PRODUCT
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

//IMPORT DE ORDER
import { CreateOrderController } from "./controllers/order/CreateOrderController"; //Criar Produto
import { RemoveOrderControlle } from "./controllers/order/RemoveOrderControlle"; //Deletar Produto
import { AddItemController } from "./controllers/order/AddItemController"; //Adicionar Item
import { RemoveItemController } from "./controllers/order/RemoveItemController"; //Deletar Item
import { SendOrderController } from "./controllers/order/SendOrderController"; //atualizar status do pedido 
import { ListOrderControllers } from "./controllers/order/ListOrderControllers"; //Buscar todos os pedidos concluidos
import { DetailOrderController } from "./controllers/order/DetailOrderController"; //Detalhes dos pedidos
import { FinalOrderControllers } from "./controllers/order/FinalOrderControllers"; //Fechar pedidos

//IMPORT DO MIDDLEWARES
import { IsAuthenticated } from "./middlewares/isAuthenticate"

//IMPORT DA CONFIG DO MULTER
import uploadConfig from "./config/multer"



const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROTAS USER --

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', IsAuthenticated, new DetailUserController().handle)

//-- ROTAS CATEGORY --
router.post('/category', IsAuthenticated, new CreateCategoryController().handle)

router.get('/category', IsAuthenticated, new ListCategoryController().handle)

// -- ROTAS PRODUCT --
// router.post("/product", IsAuthenticated, upload.single('file') , new CreateProductController().handle)
router.post('/product', IsAuthenticated, new CreateProductController().handle )
router.get('/category/product', IsAuthenticated, new ListByCategoryController().handle)

// -- ROTAS DE ORDER --
router.post('/order', IsAuthenticated, new CreateOrderController().handle) //criar produto
router.delete('/order', IsAuthenticated, new RemoveOrderControlle().handle) //remover produto
router.post('/order/add', IsAuthenticated, new AddItemController().handle) //adicionar item
router.delete('/order/remove', IsAuthenticated, new RemoveItemController().handle) //remover item
router.put('/order/send', IsAuthenticated, new SendOrderController().handle) //atulaizar status do pedido
router.get('/orders', IsAuthenticated, new ListOrderControllers().handle ) //Buscar todos os pedidos concluido
router.get('/order/detail', IsAuthenticated, new DetailOrderController().handle ) //Detalhes dos pedidos
router.put('/order/final', IsAuthenticated, new FinalOrderControllers().handle ) //Fechar Pedido

export { router };