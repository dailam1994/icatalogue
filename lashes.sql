PGDMP                         z            lashes    14.2    14.1 ,    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    20527    lashes    DATABASE     [   CREATE DATABASE lashes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE lashes;
                postgres    false            =           1247    20529    Role    TYPE     A   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."Role";
       public          postgres    false            �            1259    20533    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    20540    blockip    TABLE     f   CREATE TABLE public.blockip (
    "blockipID" text NOT NULL,
    ip character varying(50) NOT NULL
);
    DROP TABLE public.blockip;
       public         heap    postgres    false            �            1259    20545 	   changelog    TABLE       CREATE TABLE public.changelog (
    "changelogID" text NOT NULL,
    "dateCreated" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userUserID" text,
    "recordRecordID" text
);
    DROP TABLE public.changelog;
       public         heap    postgres    false            �            1259    20552    logging    TABLE     0  CREATE TABLE public.logging (
    "loggingID" text NOT NULL,
    ip character varying(200) NOT NULL,
    session character varying(500),
    username character varying(200),
    usertype character varying(200),
    "timestamp" character varying(50) NOT NULL,
    action character varying(50) NOT NULL
);
    DROP TABLE public.logging;
       public         heap    postgres    false            �            1259    20557    record    TABLE     �  CREATE TABLE public.record (
    "recordID" text NOT NULL,
    date character varying(50) NOT NULL,
    start character varying(50) NOT NULL,
    "end" character varying(50) NOT NULL,
    "firstService" character varying(50),
    "secondService" character varying(50),
    "thirdService" character varying(50),
    "fourthService" character varying(50),
    "fifthService" character varying(50)
);
    DROP TABLE public.record;
       public         heap    postgres    false            �            1259    20562 
   recordList    TABLE     y   CREATE TABLE public."recordList" (
    "recordListID" text NOT NULL,
    "userUserID" text,
    "recordRecordID" text
);
     DROP TABLE public."recordList";
       public         heap    postgres    false            �            1259    20567    user    TABLE     �  CREATE TABLE public."user" (
    "userID" text NOT NULL,
    "firstName" character varying(200) NOT NULL,
    "lastName" character varying(200) NOT NULL,
    "dateOfBirth" date NOT NULL,
    email character varying(200) NOT NULL,
    username character varying(200) NOT NULL,
    password character varying(255) NOT NULL,
    roles public."Role" DEFAULT 'CLIENT'::public."Role" NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    829    829            �            1259    20573 	   whitelist    TABLE     j   CREATE TABLE public.whitelist (
    "whitelistID" text NOT NULL,
    ip character varying(50) NOT NULL
);
    DROP TABLE public.whitelist;
       public         heap    postgres    false            4          0    20533    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   �5       5          0    20540    blockip 
   TABLE DATA           2   COPY public.blockip ("blockipID", ip) FROM stdin;
    public          postgres    false    210   �7       6          0    20545 	   changelog 
   TABLE DATA           p   COPY public.changelog ("changelogID", "dateCreated", "dateChanged", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    211   >8       7          0    20552    logging 
   TABLE DATA           d   COPY public.logging ("loggingID", ip, session, username, usertype, "timestamp", action) FROM stdin;
    public          postgres    false    212   [8       8          0    20557    record 
   TABLE DATA           �   COPY public.record ("recordID", date, start, "end", "firstService", "secondService", "thirdService", "fourthService", "fifthService") FROM stdin;
    public          postgres    false    213   �8       9          0    20562 
   recordList 
   TABLE DATA           V   COPY public."recordList" ("recordListID", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    214   �9       :          0    20567    user 
   TABLE DATA           t   COPY public."user" ("userID", "firstName", "lastName", "dateOfBirth", email, username, password, roles) FROM stdin;
    public          postgres    false    215   �:       ;          0    20573 	   whitelist 
   TABLE DATA           6   COPY public.whitelist ("whitelistID", ip) FROM stdin;
    public          postgres    false    216   �<       �           2606    20579 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    20581    blockip blockip_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.blockip
    ADD CONSTRAINT blockip_pkey PRIMARY KEY ("blockipID");
 >   ALTER TABLE ONLY public.blockip DROP CONSTRAINT blockip_pkey;
       public            postgres    false    210            �           2606    20583    changelog changelog_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT changelog_pkey PRIMARY KEY ("changelogID");
 B   ALTER TABLE ONLY public.changelog DROP CONSTRAINT changelog_pkey;
       public            postgres    false    211            �           2606    20585    logging logging_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.logging
    ADD CONSTRAINT logging_pkey PRIMARY KEY ("loggingID");
 >   ALTER TABLE ONLY public.logging DROP CONSTRAINT logging_pkey;
       public            postgres    false    212            �           2606    20587    recordList recordList_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_pkey" PRIMARY KEY ("recordListID");
 H   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_pkey";
       public            postgres    false    214            �           2606    20589    record record_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY ("recordID");
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    213            �           2606    20591    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    215            �           2606    20593    whitelist whitelist_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.whitelist
    ADD CONSTRAINT whitelist_pkey PRIMARY KEY ("whitelistID");
 B   ALTER TABLE ONLY public.whitelist DROP CONSTRAINT whitelist_pkey;
       public            postgres    false    216            �           1259    20594    blockip_blockipID_key    INDEX     Y   CREATE UNIQUE INDEX "blockip_blockipID_key" ON public.blockip USING btree ("blockipID");
 +   DROP INDEX public."blockip_blockipID_key";
       public            postgres    false    210            �           1259    20595    blockip_ip_key    INDEX     G   CREATE UNIQUE INDEX blockip_ip_key ON public.blockip USING btree (ip);
 "   DROP INDEX public.blockip_ip_key;
       public            postgres    false    210            �           1259    20596    changelog_changelogID_key    INDEX     a   CREATE UNIQUE INDEX "changelog_changelogID_key" ON public.changelog USING btree ("changelogID");
 /   DROP INDEX public."changelog_changelogID_key";
       public            postgres    false    211            �           1259    20597    logging_loggingID_key    INDEX     Y   CREATE UNIQUE INDEX "logging_loggingID_key" ON public.logging USING btree ("loggingID");
 +   DROP INDEX public."logging_loggingID_key";
       public            postgres    false    212            �           1259    20598    recordList_recordListID_key    INDEX     g   CREATE UNIQUE INDEX "recordList_recordListID_key" ON public."recordList" USING btree ("recordListID");
 1   DROP INDEX public."recordList_recordListID_key";
       public            postgres    false    214            �           1259    20599    record_recordID_key    INDEX     U   CREATE UNIQUE INDEX "record_recordID_key" ON public.record USING btree ("recordID");
 )   DROP INDEX public."record_recordID_key";
       public            postgres    false    213            �           1259    20600    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public            postgres    false    215            �           1259    20601    user_userID_key    INDEX     O   CREATE UNIQUE INDEX "user_userID_key" ON public."user" USING btree ("userID");
 %   DROP INDEX public."user_userID_key";
       public            postgres    false    215            �           1259    20602    user_username_key    INDEX     O   CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);
 %   DROP INDEX public.user_username_key;
       public            postgres    false    215            �           1259    20603    whitelist_ip_key    INDEX     K   CREATE UNIQUE INDEX whitelist_ip_key ON public.whitelist USING btree (ip);
 $   DROP INDEX public.whitelist_ip_key;
       public            postgres    false    216            �           1259    20604    whitelist_whitelistID_key    INDEX     a   CREATE UNIQUE INDEX "whitelist_whitelistID_key" ON public.whitelist USING btree ("whitelistID");
 /   DROP INDEX public."whitelist_whitelistID_key";
       public            postgres    false    216            �           2606    20605 '   changelog changelog_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_recordRecordID_fkey";
       public          postgres    false    213    3479    211            �           2606    20610 #   changelog changelog_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_userUserID_fkey";
       public          postgres    false    211    215    3486            �           2606    20615 )   recordList recordList_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_recordRecordID_fkey";
       public          postgres    false    214    3479    213            �           2606    20620 %   recordList recordList_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_userUserID_fkey";
       public          postgres    false    3486    214    215            4   �  x�u�Mj\1��oN1�����9DN`0RKC�*���vlǎ�!x-J|U]A�n��K�)���Z�X<�5^G�"�j[N�{D���}sT�]��0�:��4fИ�zЂp�z%��\D��~ <߂"@���?<>�~迎����R0�g)���F�Q��B��� ��מu`@�q���2����g�
A���=D�ǎ�Vbo�o�g�+����C�E���eE����!�2q�"��$���r���s�lI��O��Q�lۨ;Mr;;l��P{����D3���N�������̀`�*��l�3�6v������E���5��6���U[=f�}�j
rۍ���0f�^�W\a��nNY�(�@�JAza���C�A���q���&#��}��f[�̈�>�*��Y��;�ucև12�����c�Rd�y"�����f���;���}���s!9CR�U�B!�w�)ש��5�O:�6�Fw9�NO�g�      5   R   x�M��� г삱
��"ߺ�Mzj^^
6�������m����F�f����̃dhLV����j�a�s����JD/M)a      6      x������ � �      7   \   x��;�  ��RҖ��Nj"�a����5oy��,�HH@�f�it��
��,9���C�-f���?Ff� T*�D<��Ї�l�^ms��@-�      8     x���;N1�:s
8���<�ގ,� ��qRA���dvW� Rd��_��0@V���kɪ�ak-��9��1��,���[l-67F�+��+�Di�.������ c@9 ���@t>�>{����s]$f�Z"�'��f��Ԙ*���D�P�93����_�6.����ؚ$e)�$��٫\���^i��fcO��fj�(��8ʔ4����7Z�i:ĭ�[��:�h�����,�!�{��h/����x���ا�eY�  �      9   �   x����q 1�^��'J��	������b٩{ U�:�� ��J:3y<؝��`��+Éc!�e�OY�� ��B��0M�7���)\F�8	*��E����*j}��W�A�%�-��,`,����Nn�b@-�K���}�~ʎ�{�p��뮻u��kxUF��&�^@����!��"�޲w�����euU      :   �  x�M�͒�0�u|�I������muZE��f�� 2����O�أUV�E���~u��H�AKiԽ<�9�	E��N&���bwL�#)��ABA���H
�ˑ�� ��c��n	Y�L��/-��\g�/^k&N9�o�o��s��k8?��GQTY	�a��X(#�BY���y,%��Ђ�*:��{�p�׫z2o�wOϳ�g��|dy���JQ��6QU9��)��WTg>��~�X��E8��k��t���
*B	�U̕K��+��m�Vik@0!������`���9�qCb?ԣa*f�yj�$3��bq��6��V�e}�N�d#�:�̓�vh�̡R��pe�vU`#el�`B��Ve�:Y{�JB,�#A��O���0����.��_�/~�d��"\�*oNLM� N�s�u����G�}���^��/*�      ;   S   x�Mû�0�:��G��]Ҁ?������`Q\���O��vdl��}A��(Wd.�)�C�9Ăq4k�����KO#�X��     