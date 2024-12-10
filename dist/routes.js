"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//IMPORT DOS USERS
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
//IMPORT DO CATEGORY
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
//IMPORT DE PRODUCT
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
//IMPORT DE ORDER
const CreateOrderController_1 = require("./controllers/order/CreateOrderController"); //Criar Produto
const RemoveOrderControlle_1 = require("./controllers/order/RemoveOrderControlle"); //Deletar Produto
const AddItemController_1 = require("./controllers/order/AddItemController"); //Adicionar Item
const RemoveItemController_1 = require("./controllers/order/RemoveItemController"); //Deletar Item
const SendOrderController_1 = require("./controllers/order/SendOrderController"); //atualizar status do pedido 
const ListOrderControllers_1 = require("./controllers/order/ListOrderControllers"); //Buscar todos os pedidos concluidos
const DetailOrderController_1 = require("./controllers/order/DetailOrderController"); //Detalhes dos pedidos
const FinalOrderControllers_1 = require("./controllers/order/FinalOrderControllers"); //Fechar pedidos
//IMPORT DO MIDDLEWARES
const isAuthenticate_1 = require("./middlewares/isAuthenticate");
//IMPORT DA CONFIG DO MULTER
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// -- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticate_1.IsAuthenticated, new DetailUserController_1.DetailUserController().handle);
//-- ROTAS CATEGORY --
router.post('/category', isAuthenticate_1.IsAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', isAuthenticate_1.IsAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// -- ROTAS PRODUCT --
// router.post("/product", IsAuthenticated, upload.single('file') , new CreateProductController().handle)
router.post('/product', isAuthenticate_1.IsAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticate_1.IsAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
// -- ROTAS DE ORDER --
router.post('/order', isAuthenticate_1.IsAuthenticated, new CreateOrderController_1.CreateOrderController().handle); //criar produto
router.delete('/order', isAuthenticate_1.IsAuthenticated, new RemoveOrderControlle_1.RemoveOrderControlle().handle); //remover produto
router.post('/order/add', isAuthenticate_1.IsAuthenticated, new AddItemController_1.AddItemController().handle); //adicionar item
router.delete('/order/remove', isAuthenticate_1.IsAuthenticated, new RemoveItemController_1.RemoveItemController().handle); //remover item
router.put('/order/send', isAuthenticate_1.IsAuthenticated, new SendOrderController_1.SendOrderController().handle); //atulaizar status do pedido
router.get('/orders', isAuthenticate_1.IsAuthenticated, new ListOrderControllers_1.ListOrderControllers().handle); //Buscar todos os pedidos concluido
router.get('/order/detail', isAuthenticate_1.IsAuthenticated, new DetailOrderController_1.DetailOrderController().handle); //Detalhes dos pedidos
router.put('/order/final', isAuthenticate_1.IsAuthenticated, new FinalOrderControllers_1.FinalOrderControllers().handle); //Fechar Pedido
