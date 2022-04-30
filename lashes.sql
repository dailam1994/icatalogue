PGDMP         4                z            lashes    14.2    14.1 '    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    19129    lashes    DATABASE     [   CREATE DATABASE lashes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE lashes;
                postgres    false            <           1247    19131    Role    TYPE     A   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."Role";
       public          postgres    false            �            1259    19135    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
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
       public         heap    postgres    false            �            1259    19142    availability    TABLE     �   CREATE TABLE public.availability (
    "availabilityID" text NOT NULL,
    date timestamp(6) without time zone NOT NULL,
    "startTime" timestamp(6) without time zone NOT NULL,
    "endTime" timestamp(6) without time zone NOT NULL
);
     DROP TABLE public.availability;
       public         heap    postgres    false            �            1259    19147    booking    TABLE     �  CREATE TABLE public.booking (
    "bookingID" text NOT NULL,
    date timestamp(6) without time zone NOT NULL,
    "startTime" timestamp(6) without time zone NOT NULL,
    "endTime" timestamp(6) without time zone NOT NULL,
    "firstService" character varying(50),
    "secondService" character varying(50),
    "thirdService" character varying(50),
    "fourthService" character varying(50),
    "fifthService" character varying(50)
);
    DROP TABLE public.booking;
       public         heap    postgres    false            �            1259    19152    bookingList    TABLE     }   CREATE TABLE public."bookingList" (
    "bookingListID" text NOT NULL,
    "userUserID" text,
    "bookingBookingID" text
);
 !   DROP TABLE public."bookingList";
       public         heap    postgres    false            �            1259    19157 	   changelog    TABLE       CREATE TABLE public.changelog (
    "changelogID" text NOT NULL,
    "dateCreated" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userUserID" text,
    "bookingBookingID" text
);
    DROP TABLE public.changelog;
       public         heap    postgres    false            �            1259    19164    logging    TABLE     K  CREATE TABLE public.logging (
    "loggingID" text NOT NULL,
    ip character varying(200) NOT NULL,
    session character varying(500) NOT NULL,
    username character varying(200) NOT NULL,
    usertype character varying(200) NOT NULL,
    "timestamp" character varying(50) NOT NULL,
    action character varying(50) NOT NULL
);
    DROP TABLE public.logging;
       public         heap    postgres    false            �            1259    19169    user    TABLE     �  CREATE TABLE public."user" (
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
       public         heap    postgres    false    828    828            ,          0    19135    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   \2       -          0    19142    availability 
   TABLE DATA           V   COPY public.availability ("availabilityID", date, "startTime", "endTime") FROM stdin;
    public          postgres    false    210   �2       .          0    19147    booking 
   TABLE DATA           �   COPY public.booking ("bookingID", date, "startTime", "endTime", "firstService", "secondService", "thirdService", "fourthService", "fifthService") FROM stdin;
    public          postgres    false    211   L4       /          0    19152    bookingList 
   TABLE DATA           Z   COPY public."bookingList" ("bookingListID", "userUserID", "bookingBookingID") FROM stdin;
    public          postgres    false    212   j6       0          0    19157 	   changelog 
   TABLE DATA           r   COPY public.changelog ("changelogID", "dateCreated", "dateChanged", "userUserID", "bookingBookingID") FROM stdin;
    public          postgres    false    213   9       1          0    19164    logging 
   TABLE DATA           d   COPY public.logging ("loggingID", ip, session, username, usertype, "timestamp", action) FROM stdin;
    public          postgres    false    214   79       2          0    19169    user 
   TABLE DATA           t   COPY public."user" ("userID", "firstName", "lastName", "dateOfBirth", email, username, password, roles) FROM stdin;
    public          postgres    false    215   T9       �           2606    19176 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    19178    availability availability_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.availability
    ADD CONSTRAINT availability_pkey PRIMARY KEY ("availabilityID");
 H   ALTER TABLE ONLY public.availability DROP CONSTRAINT availability_pkey;
       public            postgres    false    210            �           2606    19180    bookingList bookingList_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_pkey" PRIMARY KEY ("bookingListID");
 J   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_pkey";
       public            postgres    false    212            �           2606    19182    booking booking_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY ("bookingID");
 >   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_pkey;
       public            postgres    false    211            �           2606    19184    changelog changelog_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT changelog_pkey PRIMARY KEY ("changelogID");
 B   ALTER TABLE ONLY public.changelog DROP CONSTRAINT changelog_pkey;
       public            postgres    false    213            �           2606    19186    logging logging_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.logging
    ADD CONSTRAINT logging_pkey PRIMARY KEY ("loggingID");
 >   ALTER TABLE ONLY public.logging DROP CONSTRAINT logging_pkey;
       public            postgres    false    214            �           2606    19188    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    215            �           1259    19189    availability_availabilityID_key    INDEX     m   CREATE UNIQUE INDEX "availability_availabilityID_key" ON public.availability USING btree ("availabilityID");
 5   DROP INDEX public."availability_availabilityID_key";
       public            postgres    false    210            �           1259    19243    availability_date_key    INDEX     U   CREATE UNIQUE INDEX availability_date_key ON public.availability USING btree (date);
 )   DROP INDEX public.availability_date_key;
       public            postgres    false    210            �           1259    19190    bookingList_bookingListID_key    INDEX     k   CREATE UNIQUE INDEX "bookingList_bookingListID_key" ON public."bookingList" USING btree ("bookingListID");
 3   DROP INDEX public."bookingList_bookingListID_key";
       public            postgres    false    212            �           1259    19191    booking_bookingID_key    INDEX     Y   CREATE UNIQUE INDEX "booking_bookingID_key" ON public.booking USING btree ("bookingID");
 +   DROP INDEX public."booking_bookingID_key";
       public            postgres    false    211            �           1259    19192    changelog_changelogID_key    INDEX     a   CREATE UNIQUE INDEX "changelog_changelogID_key" ON public.changelog USING btree ("changelogID");
 /   DROP INDEX public."changelog_changelogID_key";
       public            postgres    false    213            �           1259    19193    logging_loggingID_key    INDEX     Y   CREATE UNIQUE INDEX "logging_loggingID_key" ON public.logging USING btree ("loggingID");
 +   DROP INDEX public."logging_loggingID_key";
       public            postgres    false    214            �           1259    19194    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public            postgres    false    215            �           1259    19195    user_userID_key    INDEX     O   CREATE UNIQUE INDEX "user_userID_key" ON public."user" USING btree ("userID");
 %   DROP INDEX public."user_userID_key";
       public            postgres    false    215            �           1259    19196    user_username_key    INDEX     O   CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);
 %   DROP INDEX public.user_username_key;
       public            postgres    false    215            �           2606    19197 -   bookingList bookingList_bookingBookingID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES public.booking("bookingID") ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_bookingBookingID_fkey";
       public          postgres    false    212    211    3470            �           2606    19202 '   bookingList bookingList_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_userUserID_fkey";
       public          postgres    false    215    3482    212            �           2606    19207 )   changelog changelog_bookingBookingID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES public.booking("bookingID") ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_bookingBookingID_fkey";
       public          postgres    false    3470    211    213            �           2606    19212 #   changelog changelog_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_userUserID_fkey";
       public          postgres    false    3482    213    215            ,   �   x�m�1
�0��99E��'�u�C��"�6d���Ӥs��/����[�%�M��i�3��L�xL��� ����P�52�TH�ͭ["V(������Љ�9�$�і�e^��I��~/	4#��x�i^��'��}���w�.�      -   C  x�m��m�0�s��m��Ԓ�>T�%DA�Y�i��=��C '�΅�O�k�ꖨIo�̀
T����9g���=�����n%��$�(�=�W�a�\�v�`����%� B�5����X%��+�7@@�Ш��Qۀ�@����EB�����+�x :��s)Bx4��UJ�r.^��]:���;I3�~o��hhm��5HW�V��+@7  I���&� ]}_�M�,�+��x���ȽjN����5`���6˱��<�_�������I��C{�}�^Z�CL�m�ُ���;cz�d�l��������p�      .     x���;��0Dc�s�@�=�� "G����z5^i>U*/`���6'9� 61��p�&i�/�D�T.��׷3�`9a�΢��'�_?~����*P'U�p-:���l�B�&=�/F��,���ʽ+l���	*�Sfh=pw�PF��{j'�ۅ�	��y�{��ي`X�	�+-q*0p���ZO\s�9O��Bx��(~�����\.���(1�����~*���n�������kd*#tNx&�n�°HZ��pzZ�����+�"Z��B����l��LK}�I��cϸ+ݲ���Sy��P���k��UF��9*?M�P:zq�$��p���ɷ�f@�B/�Z�1�ʧ���I�w�:Ol=d�e���͵k��Η99�"^��/v����x��uuk5fa��!�*k�X��'2����Xye���Y�W�_�.��#%��]o�-�N}u.����x�)F�J0�3���L�L�X]ş�[�3�e����
�뭩S׾��_�'u�E��g��[�oz�����۶��1��      /   �  x��T��0<?�BFB�^r��/!�T��=��,��Q�Wh�$g�&���^���ůe�(W���d7'ga�~���?�~7
H���.m_EҬmW4]�����N��Pd�RL��iGZ�78�7|��B�������1f���)�H�L��:�tѶ8d��<N�0�ɝv���[���������vn�̈́���S���.�a��0�v��Uk���ڗ�8i�j��T��x��[���G�$�qHj2Y���&�����0��������)o���S�c6}�%ݾ3�p�J��;P+�����9
[�H�:��Z�z�cP2-!��[�@qj	ߢ�i�oޱ�^�8�(2�w��t"yZ���~���F�)\�w����Q�c2-<����$�I0�R��:����Z?���J���ho�g�&����,�ux�S)���6��4Q~��8vz6�V[M$��X�1̾�m��~�RHf[n'񲺈k�z�ժ���� �y�Hf�k���9���X)(��a[��:[z�5v{��cu�Z�.�c�{�'����,�Ǝ�i��1Pt���3޽�1:96|�4N����W8]�q�)�[�l�hݚ���SOe��s���d����!K�W��઱������+B���憫����<� �>�3      0      x������ � �      1      x������ � �      2   �  x�M�Ks�0�u�nCȅ�>)��Z��K����XE���?l�3g����9Gpj)<�b�!�ڗzdBb�J'����Ez���b	�O�/)T�#�/�
�%a��.s�7��r��QV���9��-oxV�7���خ4C4j�/�����CQT	�f��(#�B�籔`e��LTѢ$�؃D�S��H�x}���#���c��m��!�m�i�^�Ś���X�̗������@�C#Oc�r���P�n�#�R��&$����V�窯$	���y��H�x#���D���;�np��RҠ��4-�M)�j���J5�&�\4�c�U�a2�VE�k����S�T���+�͝��<�[�5% ���ʟ�N�[�\kY0�Vc4'�^�ف�O����A+���,�t�~2��Ж?y��>P����k��     