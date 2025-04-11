/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","d4f8e8598f9265b0a5c8f8df6a6c274e"],["/2019/01/02/Anconda常用命令总结/index.html","4ca377d04dca96a714f6ac726d56da89"],["/2019/01/02/句型/index.html","feb9e2e713830464bb7346590edd56d5"],["/2019/01/02/日语助词/index.html","e4e73d4096203c9e4cab5265a015bf80"],["/2019/01/03/on-my-zsh/index.html","9ff887fa850bdff4b947999d9e8b6f79"],["/2019/01/04/《当我遇见一个人》摘录/index.html","0dd50e525beeecdfc2dc695c1723b6f1"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","706a9bf8fa7b8f536d8abd6e06795e92"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","8c82648e63bed78034e31a9cee18fe43"],["/2019/01/04/经济学笔记/index.html","c6a01d746aeaeda4e04547a075796b09"],["/2019/01/04/语法总结（5-15）/index.html","4ce26c3d65624c068f7c44bd808475fb"],["/2019/01/05/linux常用命令/index.html","191037d30ef61f6a2d7661adac26f0cd"],["/2019/01/05/mamba/index.html","1cb83547e81d03733fdedf17949d3ad8"],["/2019/01/05/tflite编译/index.html","04da15abecd4bb1e8d08ef06798f10eb"],["/2019/01/05/tflite转换/index.html","f768c59a84e5bb7a0e0c1eebc969f5d9"],["/2019/01/05/torch安装/index.html","ba2ccbe7c19ed673eef588b06391a8e7"],["/2019/01/05/vscode/index.html","b0d1fa2c1939ad4da14cf96e4374d6c2"],["/2019/01/06/敬语/index.html","ca6365ba3b5448ed3c40ee49e6138ea2"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","97564a982fe6a1420cc894d423f34cdd"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","2f9acd920ed7e0d219ec5b1875a6eabb"],["/2019/01/07/cuda 手动配置/index.html","0f83b2c1c18f146ed8b6bcd8c7c980f9"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","ba406ed64e0d0494fccb2b4de10a97f7"],["/2019/01/07/docker-ldap-mysql/index.html","5c3be6ab0de72c5ecb15eef3482d692b"],["/2019/01/07/docker代理/index.html","eb8fb3bc38a8a04925bcd454647eb40a"],["/2019/01/07/docker安装/index.html","99202ac5f03271942fab15ce791c206a"],["/2019/01/07/docker容器挂载硬盘/index.html","19de0f003cb043064ae2ee492060e1c5"],["/2019/01/07/github上传代码/index.html","b3a52d51aea38c805fc444dbb6fb4424"],["/2019/01/07/jupyter配置vpn/index.html","e76d15776a00c23892d34cfbcd9c4bb7"],["/2019/01/07/kaldi 安装/index.html","4f519f0be4cef416cbf8cd2312b1ffa4"],["/2019/01/07/linux常用工具/index.html","fc39c58c308f04a2155ba42c2cd0f4cf"],["/2019/01/07/opencv/index.html","5e6028fa3de326a11fa9fbec9f172615"],["/2019/01/07/ssh 远程连接docker/index.html","bcaa03ffd8c27dba931b52eaa7056b3b"],["/2019/01/07/导出/index.html","5c8ad45047cb9740286b1764847c9754"],["/2019/01/07/换源/index.html","b15aa48620d28a2c477b66a089d5f3fd"],["/2019/01/07/服务器配置LDAP/index.html","89c0a77705470dcfbacc963ce51d6706"],["/2019/01/09/markdown/index.html","8d7b92ef2bb9a4e7600520edb8949acb"],["/2019/01/09/opencv图像美化/index.html","e0d6b0de9a8b24f07043d2bd9a02ad3f"],["/2019/01/11/19单元语法/index.html","6d551f49d72a714edd96ed8b4efe4878"],["/2019/01/11/20单元语法/index.html","c679a8ec99592b4f648d25991589cd0b"],["/2019/01/11/opencv-图片几何变换/index.html","b83d96d845d024adef596671ed9b98b7"],["/2019/01/11/opencv-图片处理及绘图/index.html","b2bd0fe3e733146a5aec9408bbb1dfc8"],["/2019/01/11/wine安装qq/index.html","5cd4b89bf33236dfb661b527d8baa499"],["/2019/01/12/tensorflow-可视化/index.html","90325d049975649d463485204f0546f9"],["/2019/01/12/tensorflow-基础语法/index.html","41b6220e1df12f45bc3bee5993b001ba"],["/2019/01/13/RNN/index.html","cd92cd775239a5dd1c1235fd220a04e7"],["/2019/01/13/keras实现CNN/index.html","be45a996ada2508a61a2064e3b943f7f"],["/2019/01/13/卷积神经网络实现/index.html","3c269a1c1d1878635903bd095f57af0b"],["/2019/01/13/循环神经网络RNN-写诗/index.html","fa28857aea1be6ec4c4be35d2ceff17a"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","b68aa4bae0f3e56ec6492acbd7f51fd6"],["/2019/01/14/反向传播/index.html","420618ef2da59ae4f8d6b186ee38eaf6"],["/2019/01/14/图床/index.html","261bad184dad8f656a036f0d84190973"],["/2019/01/14/感知器与激活函数/index.html","e7516868cf27ccbc342f02039b8fc2e3"],["/2019/01/15/PIL简单应用/index.html","88aafb01892849497a12a058fbd0a779"],["/2019/01/15/卷积神经网络理论/index.html","a7c3a12c250c4d23599882ece778e5f2"],["/2019/01/15/图片分类之pca-svc/index.html","ecde82bd5f7b823c330c819a095421fb"],["/2019/01/15/强化学习基础/index.html","d014bab07ccc05af40edbf47fd8ea14f"],["/2019/01/15/经典神经网络/index.html","4071ae5a6fb8d6b36d06e5aa88b4e060"],["/2019/01/16/DQN/index.html","60e4991a3971f5d4b7d3bfbcf0e3a033"],["/2019/01/16/TCP传输图片/index.html","30157c91f7535785da85ab5b85ac34d5"],["/2019/01/16/时序差分学习/index.html","a9cf3d3c796b06ae366474d61e8eca9a"],["/2019/01/16/蒙特卡洛方法/index.html","121efcb425a77ec52d18f08ff90e73b4"],["/2019/01/17/Double-QDN/index.html","4658b113ef8bbb5781173d8d9986bfd9"],["/2019/01/17/RNN理论/index.html","c47b6ccb88ad80d9f04a1d6a558063f4"],["/2019/01/17/梯度下降/index.html","9402885ad858d9bc87497d550e1c4685"],["/2019/01/18/PG和TD3/index.html","5fd2355d69e8e59b79f9149237523b42"],["/2019/01/20/21单元语法/index.html","a4341b4c6859540dbd7f23016a38351a"],["/2019/01/20/GAN理论/index.html","c56a2637a051e5580deb0f74e85a43d5"],["/2019/01/20/PG3和IRL/index.html","96d938c6b223e780c1ebdbe3d1a5bb54"],["/2019/01/20/数据集/index.html","1d58372ba0945e780e75f9965fbc1c2a"],["/2019/01/21/DCGAN/index.html","00d7fd3c030c142142b473dfadf07996"],["/2019/01/21/LSTM/index.html","c09191467ba3cc23dcf1221528483a1d"],["/2019/01/21/点击预估/index.html","a48873b46206ea16331ece1879b1e1cb"],["/2019/01/22/SVD分解/index.html","48d5b0a11f1bca26f8858358f07320b5"],["/2019/01/22/SVM/index.html","fa3d973b77f6332ff70c8522ad2208b2"],["/2019/01/22/机器学习简介/index.html","7556f3b98172afe1fb8f52aa3b6e9251"],["/2019/01/22/线性回归/index.html","b3c93320fcc5d1934a0ffad4f00428b7"],["/2019/01/22/逻辑回归/index.html","73582a02028641ed0d8a1527b5d4ee9b"],["/2019/01/23/numpy/index.html","801a018381ecbb8a99741ac5a0eb489a"],["/2019/01/23/决策树与随机森林/index.html","a79e6ddcc855c71f036b0e2f4e298366"],["/2019/01/23/聚类/index.html","cf8e59884ea62fb215fbe42d3d85bf46"],["/2019/01/24/matplotlib/index.html","f7d56a4afbe83fe47265810e7ad18b90"],["/2019/01/25/pandas/index.html","34fb106c4b3fadc28cd5b85a60fb5bb4"],["/2019/01/25/语义分割/index.html","331bd95d79c6230d251f98778e73e444"],["/2019/01/27/22单元语法/index.html","61208ea9611d4e333b004f163bbd3caf"],["/2019/01/27/SVM案例/index.html","6b1f968171b4fe2559d521a683955a72"],["/2019/01/28/requests库及爬虫案例/index.html","885b273ef244f25b2a927a98086a5257"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","7d9c98a7c30a27753ff6446138390f08"],["/2019/01/28/异常/index.html","fbbf4e6c734e113aeef3cf5fc4749be3"],["/2019/01/28/描述器和装饰器/index.html","102249b5d0fee7b833a753fea110338f"],["/2019/01/28/文件/index.html","9ee36c55f33d217d728350fcbbe97ea9"],["/2019/01/28/正则/index.html","3af65a4f146a530a0b5c9d39703e60c5"],["/2019/01/29/函数基础和函数参数/index.html","7fd638c578724762b9f16a958369647e"],["/2019/01/29/多继承和魔方方法/index.html","c4f9eba0792c3b864aa5ed4257179501"],["/2019/01/29/类定义、属性和继承/index.html","1af6738b99812c7f083ab763a5ab7254"],["/2019/02/27/23单元/index.html","9f078e4a64607b72247a1fa6431df6c7"],["/2019/03/12/hexo加速/index.html","13e2e20fab8fe545526dda42d2064d9a"],["/2019/03/12/hexo系统重装恢复/index.html","0d6f8f1ba5c94cc0f6d161349a6d36ac"],["/2019/03/13/24单元/index.html","baf2e655aa2103997895e561c3e4e0c4"],["/2019/03/19/25单元/index.html","82137e8c1f10a9a01428505f4c3dad84"],["/2019/03/26/26单元/index.html","da565214bc0a841b5bfa5d0635ec9511"],["/2019/04/14/27单元/index.html","092e763975fe140b175d2a3142e083f7"],["/2019/05/01/28单元/index.html","603b6a8cd778b0b17214b3caa70d35ae"],["/2019/05/02/29单元/index.html","d517c7cbcdfa06a7b76c3ab5e911ac8e"],["/2019/05/12/30单元/index.html","662eb8342e01ff83e8ddb8fd1ca4f47f"],["/2019/06/03/jni/index.html","44545794322e45e6b336ad6f4f537a9c"],["/2019/06/07/JNA/index.html","3823d1e21e2cc3921fab1ac0c73fce35"],["/2022/08/07/R配置jupyter/index.html","47ec62c9172fe587807e68476b7183eb"],["/2022/08/18/FFmpeg常用命令/index.html","ad93281096c620061a08b84b1b13ccb8"],["/2022/08/18/linux系统代理/index.html","427875f166f917be912824f4f6201d42"],["/2022/08/18/matplotlib补充/index.html","679af1e9672b0f5d9ea64162a213b777"],["/2022/08/18/常用命令/index.html","dcc979d750a97f5ee6c1bca0176c90c0"],["/2022/08/20/rust 多平台demo/index.html","386416281597f75f021827fd0609b089"],["/2022/08/20/sacred/index.html","0485c57c7e8981f59bb4b64528dfa406"],["/2022/08/20/wsl/index.html","7c1c29f1cea62f21d2e1e53739a66a8c"],["/2022/08/20/双系统安装/index.html","dee916de8f6503da31a5428e4d6b0f06"],["/2024/11/08/source/index.html","cea852aba6a9ad7923cd19c86c5919a4"],["/archives/2018/12/index.html","2e3a3cadc844ad70ffdfeaa30771a85d"],["/archives/2018/index.html","a83dc2e41f19aa8e5ae7a748e3fd71c1"],["/archives/2019/01/index.html","c90e00b53771ae89da1fb666a7843cd1"],["/archives/2019/01/page/10/index.html","677fdb54a080361ed049b97769c201d5"],["/archives/2019/01/page/2/index.html","e136d77b0f3ca4f6aeb135762c3e0453"],["/archives/2019/01/page/3/index.html","a1ea50519d31144e4c240faac6072d15"],["/archives/2019/01/page/4/index.html","fa15f1339a0be80383cde299c8e2c940"],["/archives/2019/01/page/5/index.html","9c4445026711a0b2d97f0b54874c8474"],["/archives/2019/01/page/6/index.html","0f1476d3b685fd5a379792ce323c54ec"],["/archives/2019/01/page/7/index.html","654bf0b77150b80094f360675b252389"],["/archives/2019/01/page/8/index.html","a6f42163e484cf429e3c72b8762a680d"],["/archives/2019/01/page/9/index.html","19454c419c653b961359714a7199d105"],["/archives/2019/02/index.html","b7f165f7afddae7057284bb68f5b89b5"],["/archives/2019/03/index.html","55af1077e5c33a48dd9595bb807157f2"],["/archives/2019/04/index.html","3503887b4693df6576e3bca23142999c"],["/archives/2019/05/index.html","1cf9d5554413d0eee2a5456c2bada9bc"],["/archives/2019/06/index.html","9686c8f9cef09ea63c6d6f1f76a02ad4"],["/archives/2019/index.html","4a0fa3c7b1c2faf52da1e1066e6e1987"],["/archives/2019/page/10/index.html","e7d36b68e4c0c38f8e20c4601d275db3"],["/archives/2019/page/11/index.html","fef51891e5b553737ada857667ca85e3"],["/archives/2019/page/2/index.html","8e33be81c9b69c9c4a8d8d4bc44f0ee9"],["/archives/2019/page/3/index.html","2c3ee1389818d5451acec78fddffbca7"],["/archives/2019/page/4/index.html","ad11257eb2f0cd0dd9589e35701ca465"],["/archives/2019/page/5/index.html","7ece7398e2615aa279ba549a946172fb"],["/archives/2019/page/6/index.html","9cbbf241ede75b8f559f4efc28220063"],["/archives/2019/page/7/index.html","f699d6b8823282f227563cb61513240c"],["/archives/2019/page/8/index.html","af9df8ed71beb139b5b9da8ab2e83415"],["/archives/2019/page/9/index.html","3a8118a5fe570e3a39fb2d9ae8ce7a0a"],["/archives/2022/08/index.html","f5d70220ba1269c60602d3fb220cba77"],["/archives/2022/index.html","9d86142d1c8a8fbed4eb534b4c7d7fc5"],["/archives/2024/11/index.html","b4dc625535d059ef4160fb9782fa008e"],["/archives/2024/index.html","2dc53f034263615b6412945bc53513ff"],["/archives/index.html","45058cd24bbc92d13ffe848e4468a524"],["/archives/page/10/index.html","baae3182f962a16fed4e39c63bce18bf"],["/archives/page/11/index.html","91db47e0fcf7e7ec358fcfa148707e56"],["/archives/page/12/index.html","6289d3eab01d9f1abdb21e4e2eaef810"],["/archives/page/2/index.html","083180677a5104b4f588a2d55f3fdbd2"],["/archives/page/3/index.html","07c2fb436a1233ac25532385fbacd61a"],["/archives/page/4/index.html","00408322616e3504382f19d4700ed456"],["/archives/page/5/index.html","8cf18092001ad1ef1ec6d2c3d8cd61fd"],["/archives/page/6/index.html","55c478377d8709a256b9fc29ff26609e"],["/archives/page/7/index.html","c3c38f78f2d1e6b0d5e644203d5df971"],["/archives/page/8/index.html","975001eefe5bc9f8f0da49795439def9"],["/archives/page/9/index.html","fba97b64547601b297783dd868f0f6fc"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","39e40e3d51830310385f90dc2c19ec79"],["/categories/dxz/index.html","bb104b3c10620312b2d6b7a37b7d0038"],["/categories/index.html","abe9d11b28713e894b96a1ba8414fcb5"],["/categories/linux/index.html","22627f3effb718f44562a13314458453"],["/categories/python/index.html","fcfc75a1e08b13d2926c03d8a4caa5c8"],["/categories/tensorflow/index.html","07f2e7f85840a61bd01c9ef6d237022e"],["/categories/图片分类/index.html","31613c983afb218e0a27fdb515e9ca92"],["/categories/工具/index.html","52e3407740adb75dee0c2ea4e0dbc7ab"],["/categories/工具/page/2/index.html","4297745be28693b63721548dff6bbfe2"],["/categories/强化学习/index.html","c8e26a9cb59b094ff77804a801c4ecc1"],["/categories/数据集/index.html","b983a8a89358fa81a561e614ce027ce0"],["/categories/日语/index.html","47b170398fad480e6a0b4d45c29a0360"],["/categories/日语/page/2/index.html","1c80110804ca204bb25dc53a8bbed7fb"],["/categories/机器学习/index.html","374bedc101af9f529fc55c74973b96d5"],["/categories/深度学习/index.html","c4276da073c3960ee3fc3c594363704b"],["/categories/深度学习/page/2/index.html","7bd150b13a3214015c3ac23a4026928a"],["/categories/深度学习环境配置/index.html","f02dd5e49d58f5d19e03891889c4a19f"],["/categories/深度学习移植/index.html","657c0d80198480d206a869985c151093"],["/categories/计算机视觉/index.html","f3c74b68cdcc2e9d7d92999e5da1f2f1"],["/categories/读书笔记/index.html","3f19f1103b054e63ae6fa949fb8a1990"],["/css/main.css","f62470c5391d6d907882f9f830931bf4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7fac677202861c8d98e2fa873e120282"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","417a09e3709e1a3efac0b64706d51879"],["/page/11/index.html","8c9efdede6a8765dfed18654ab61c310"],["/page/12/index.html","6a54f6d080ff041186c2ca9f39a8a9bb"],["/page/2/index.html","b8f1db9a79ad4240eda46fd291e7c06e"],["/page/3/index.html","5721d33b40ed3e8e4b6211f6ee2e252d"],["/page/4/index.html","c94987ec589e3f9c833ba7b3e3472614"],["/page/5/index.html","d82129adbb5b2722e176b4de20eb73d8"],["/page/6/index.html","fb1c69cf3b63664483239f17afaa0674"],["/page/7/index.html","6edde5c69c61ca0139d5a50ad64afcbc"],["/page/8/index.html","80586bbe0cc7c49ba1fefa959a2aa5f0"],["/page/9/index.html","6b0993f62c17f9c2a5ca28973c81715e"],["/sw-register.js","16cf7756752d6ba2e3df2911665767a2"],["/tags/AlexNet/index.html","80376c1dc66beed61efb13207acf65ba"],["/tags/CNN/index.html","3601fea65011481baac3c7184d57d617"],["/tags/DCGAN/index.html","f22cebf891cef35e1524924bb871f050"],["/tags/DDPG/index.html","3c7003d03fa3a8b0072d355b2584edf6"],["/tags/DDQN/index.html","b607780160683f4aee43a9612ba3c5f9"],["/tags/DQN/index.html","d383bca47346ea58b07ae1a5402a8cc4"],["/tags/GAN/index.html","0526f4e02535b4dd6ba26c83b38baa8b"],["/tags/IRL/index.html","45350fab22e97101b8c7d79ebad2d735"],["/tags/LSTM/index.html","b89b4b988c62a900584c70744332c790"],["/tags/LeNet/index.html","6a3df071bd36688699226268c187ecc5"],["/tags/MC/index.html","7678cd995488bd78299b554a1e0c233d"],["/tags/PCA/index.html","83f843a7fbc07df17572dd94058cfd6a"],["/tags/PG/index.html","517fc9d75e224db6e1b233527a11f0ca"],["/tags/PG3/index.html","18e6b2df5f40605cb86cc6b519a58cf5"],["/tags/PIL/index.html","8d12a41b0659cfd5c5195067cfaabe9b"],["/tags/R/index.html","3076fcfcb55db4a5008ffad929878796"],["/tags/RNASeq数据下载处理全流程/index.html","029ff382ba6b25ab023e849cd87dcf77"],["/tags/RNN/index.html","bfbf05ee34d8b346f4c2274bd598769f"],["/tags/SVC/index.html","44262f2c88907f9e84d89d197214e5ea"],["/tags/SVD/index.html","ebcb35f1493a61b76c8adcc302f5a20f"],["/tags/SVM/index.html","0612ac3046a0b467f8319e3f6c6333a6"],["/tags/TCP/index.html","5d23ea9ec5174d61876edc72a59350b2"],["/tags/TD/index.html","4a37b4daab42318826f1ccad245d1e09"],["/tags/TD3/index.html","da9cede2bfb5746e2d0f3f4c3745e9c3"],["/tags/VGG/index.html","f41c9587dcfad8a855c07d0f3f4ff0f3"],["/tags/amd配置/index.html","cb142c10f668011087e8b3d769c772b9"],["/tags/anconda/index.html","06a0eedb85cfd0109cba8a788750b852"],["/tags/conda常用命令/index.html","85efcec354086416000964cdbad4baad"],["/tags/cuda配置/index.html","3e98d3d0d1a5254592486dffa1461035"],["/tags/docker-ldap-mysql-arm64/index.html","df64b48d44c73fba475d9493712ae749"],["/tags/docker-ldap-mysql/index.html","fe8bfbddddad265db34377e1e2510678"],["/tags/docker代理/index.html","629dc8ed0d6cfe0fe8ac4d12a789e75a"],["/tags/docker安装/index.html","48d0e5e8913ab05bf2e055a86726bef1"],["/tags/docker容器挂载硬盘/index.html","7d8c88d804e3cc15369c7cd770132a01"],["/tags/ffmpeg/index.html","037265c0ca41e5157ca0281158c5ff3e"],["/tags/github上传代码/index.html","9e88b51fc4c5a284338b704fc683537e"],["/tags/hexo/index.html","a82d338ff034a0fd3388ec43e4227834"],["/tags/index.html","f95eb2ad9112669920fc2c794a0d0ded"],["/tags/java调用C/index.html","a92b0aba5021e125b8b23dc705eec61e"],["/tags/jupyer配置vpn/index.html","9a7f94bdbe765fb76eb1ce686a556edd"],["/tags/kaldi/index.html","0791a99f2e76e6e693fdc6ff73e626dc"],["/tags/linux命令/index.html","49e9e33e0f0b441ca8f2e54136d10eb2"],["/tags/mamba/index.html","8101f9fbc1f194b95196d62b812dc6b7"],["/tags/markdown/index.html","60370c133a2e79e79b4c33a4837be15e"],["/tags/matplotlib/index.html","293da49fc1f9acd52d7119d6ce117756"],["/tags/numpy/index.html","4de054fec77c28bd5ba8d4c50bc5216c"],["/tags/opencv/index.html","0568e7020d59579bd5ee7c853093599e"],["/tags/pandas/index.html","a5e9bd41271d996df473654d31757bfb"],["/tags/qq/index.html","bd98e16af7603440acc69243e29c281b"],["/tags/requests库/index.html","caf77a77557d67c5358a26d4f9a79cff"],["/tags/rust-多平台demo/index.html","7309cabc60c66fb31a1883787aecf579"],["/tags/sacred/index.html","838d8626706dfd51b36d2daa46278890"],["/tags/ssh-远程连接docker/index.html","73f0d47eaa73672ab021079121a4dba0"],["/tags/tflite编译/index.html","49cf3edf01dab619f759961866ee4f7b"],["/tags/tflite转换/index.html","f95d5dac4299be0be1f5b37674c49e00"],["/tags/torch和apex安装/index.html","abb26b2adbef008f40043ae3710ebe79"],["/tags/vscode/index.html","b98a2de8b7d452702af8b64be64e94f7"],["/tags/wsl/index.html","02048364265e54d6aa350a47ad19fdf2"],["/tags/zsh/index.html","2c20fac9cd903f1e6d6d0097ad27d35a"],["/tags/代理/index.html","cf0d6ffd7c48617b9f04a6330738bfaf"],["/tags/决策树/index.html","801ccea2d5bb143828781ca35912cf8f"],["/tags/函数/index.html","adf4b759b919b034ab88006d6dc83b26"],["/tags/列表推导式/index.html","c7a13a549899c7c63bcb9c1726425ea9"],["/tags/助词/index.html","49724dff612058c81533199fb7647dc1"],["/tags/包/index.html","01e328f14c9491b5ba44d8556ad561fd"],["/tags/卷积神经网络/index.html","34c6fb0c0241c86e9586223405ddabd3"],["/tags/双系统安装/index.html","4ea12bbd988929d5e68547cdd1ccc9d2"],["/tags/反向传播/index.html","0ec16f3652c65eca32c5096a34f09ebf"],["/tags/句型/index.html","050ae0acc16542f44f13f808d8f2a9b7"],["/tags/可视化/index.html","757cb0a34b051c449baedb2659ab2474"],["/tags/哲学/index.html","973b34d6cdf4744e3d4140f2f04a9b40"],["/tags/图像美化/index.html","e5d5a2c091ae4bf5c8bd0d40fccad661"],["/tags/图床/index.html","121e2b31d6bb83ee8c5c10fb7a83be77"],["/tags/多继承/index.html","0963ca5d238289eb931763202454a868"],["/tags/工具/index.html","91c9f852d96edc9f7c97a2c44903f6c0"],["/tags/异常/index.html","5e22f9517d465cf7c852461f53faeac5"],["/tags/强化学习/index.html","79c7fd6bc303e83c1a20a5b1b860ab79"],["/tags/心理学/index.html","2e1d73ede83f83b7248f3b8657f582cd"],["/tags/感知器/index.html","3f4a7c14824dde520a548483fbed765d"],["/tags/换源/index.html","599819e1cbd6b271ff6e269fc97b8096"],["/tags/描述器/index.html","7a480d01578549cfcb8fe0f53fa7526b"],["/tags/敬语/index.html","b598db9e14e36ea8417fd68fad36d649"],["/tags/数据集/index.html","d9b848ef9ae22b62a278d3d9dcd801a9"],["/tags/文件/index.html","395336a02f15f4c4594372533f65d313"],["/tags/服务器配置LDAP/index.html","71846a5df62d2bda11cc9e0e7891417c"],["/tags/机器学习/index.html","0d3472ba52c1841612dd4b3b125c767d"],["/tags/梯度下降/index.html","92f15b74b6452a78f6721135693e5f3f"],["/tags/模块/index.html","432165d5a19cbef54498045083eb3f1b"],["/tags/正则/index.html","9bc1479a082c4c6e09b2e3561b0455d4"],["/tags/激活函数/index.html","348fcda1095ec16fce403dee0450911c"],["/tags/点击预估/index.html","76cf465ddb5fd5eea1e182af7e930e4d"],["/tags/爬虫/index.html","0f86d65f3fdb4172282ed7c467eaaef1"],["/tags/生成器/index.html","5c354ea0f64d3893e0c72a74632f9f96"],["/tags/类/index.html","e58909dec69a5beed4d363c110fefdfc"],["/tags/线性回归/index.html","e64f1f3f900194738e3068c682f40947"],["/tags/经济学/index.html","97e73d75f5f6eccdd499900ed9bf7179"],["/tags/聚类/index.html","27ec21dd47958ac64713965d046de103"],["/tags/装饰器/index.html","9de95fbb9497b93997bae1c4d541bed2"],["/tags/词型变换/index.html","ec8e5d467816a887288ad0e523a66294"],["/tags/语义分割/index.html","548bd7419616ae82a349dfaba16a6d68"],["/tags/语法/index.html","3942ee551c05c20d6afa2a8b734d33fa"],["/tags/语法/page/2/index.html","802f3ae75b3315e845d754d0cae8d21c"],["/tags/迭代器/index.html","b00c434e47c100efb2350762d1fbc1ce"],["/tags/逻辑回归/index.html","4e12588bb544ee79629e320b5f5c8e71"],["/tags/随机森林/index.html","89e50210956f28505d09b1aedcccc6b3"],["/tags/魔方方法/index.html","dbbaae0420582648f6ff597602dbec94"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
